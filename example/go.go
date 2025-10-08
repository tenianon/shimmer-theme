package main  // 必须的包声明
import "fmt"  // 导入包

func main() {  // 程序入口
    fmt.Println("Hello, Go!")
}

var a int = 10          // 显式类型声明
var b = "hello"         // 类型推断
c := 3.14               // 短变量声明（函数内）
var x, y int = 1, 2     // 多变量声明
const PI = 3.1415       // 常量

var (
    num int = 42
    flag bool = true
    str string = "Go"
    arr [3]int = [3]int{1,2,3}
    sli []int = []int{1,2}
    m map[string]int = map[string]int{"one":1}
)

// 特殊类型
var c1 complex64 = 3 + 2i
var ptr *int = &num

// if语句
if x := 10; x > 5 {
    fmt.Println(x)
}

// for循环
for i := 0; i < 3; i++ { /*...*/ }
for i, v := range []int{1,2,3} { /*...*/ }

// switch
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("MacOS")
default:
    fmt.Println(os)
}

// 基础函数
func add(a, b int) int {
    return a + b
}

// 多返回值
func swap(a, b string) (string, string) {
    return b, a
}

// 可变参数
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

type Person struct {
    name string
    age  int
}

func (p *Person) SayHello() {
    fmt.Printf("Hi, I'm %s\n", p.name)
}

type Shape interface {
    Area() float64
}

func PrintArea(s Shape) {
    fmt.Println(s.Area())
}

// Goroutine
go func() {
    fmt.Println("Running in goroutine")
}()

// Channel
ch := make(chan int)
go func() { ch <- 42 }()
val := <-ch

if err := someFunc(); err != nil {
    log.Fatal(err)
}

// 自定义错误
if _, err := os.Open("nonexist"); err != nil {
    fmt.Println(err)
}

// 闭包
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

var (
	_ Render     = (*JSON)(nil)
	_ Render     = (*IndentedJSON)(nil)
	_ Render     = (*SecureJSON)(nil)
	_ Render     = (*JsonpJSON)(nil)
	_ Render     = (*XML)(nil)
	_ Render     = (*String)(nil)
	_ Render     = (*Redirect)(nil)
	_ Render     = (*Data)(nil)
	_ Render     = (*HTML)(nil)
	_ HTMLRender = (*HTMLDebug)(nil)
	_ HTMLRender = (*HTMLProduction)(nil)
	_ Render     = (*YAML)(nil)
	_ Render     = (*Reader)(nil)
	_ Render     = (*AsciiJSON)(nil)
	_ Render     = (*ProtoBuf)(nil)
	_ Render     = (*TOML)(nil)
)

// 反射
t := reflect.TypeOf(42)
fmt.Println(t.Name())  // 输出: int

// defer
func ReadFile() {
    file, _ := os.Open("file.txt")
    defer file.Close()
    // 处理文件...
}


// Copyright 2014 Manu Martinez-Almeida. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package render

import (
	"bytes"
	"fmt"
	"html/template"
	"net/http"
	"unicode"

	"github.com/gin-gonic/gin/internal/bytesconv"
	"github.com/gin-gonic/gin/internal/json"
)

// JSON contains the given interface object.
type JSON struct {
	Data any
}

// IndentedJSON contains the given interface object.
type IndentedJSON struct {
	Data any
}

// SecureJSON contains the given interface object and its prefix.
type SecureJSON struct {
	Prefix string
	Data   any
}

// JsonpJSON contains the given interface object its callback.
type JsonpJSON struct {
	Callback string
	Data     any
}

// AsciiJSON contains the given interface object.
type AsciiJSON struct {
	Data any
}

// PureJSON contains the given interface object.
type PureJSON struct {
	Data any
}

var (
	jsonContentType      = []string{"application/json; charset=utf-8"}
	jsonpContentType     = []string{"application/javascript; charset=utf-8"}
	jsonASCIIContentType = []string{"application/json"}
)

// Render (JSON) writes data with custom ContentType.
func (r JSON) Render(w http.ResponseWriter) error {
	return WriteJSON(w, r.Data)
}

// WriteContentType (JSON) writes JSON ContentType.
func (r JSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonContentType)
}

// WriteJSON marshals the given interface object and writes it with custom ContentType.
func WriteJSON(w http.ResponseWriter, obj any) error {
	writeContentType(w, jsonContentType)
	jsonBytes, err := json.Marshal(obj)
	if err != nil {
		return err
	}
	_, err = w.Write(jsonBytes)
	return err
}

// Render (IndentedJSON) marshals the given interface object and writes it with custom ContentType.
func (r IndentedJSON) Render(w http.ResponseWriter) error {
	r.WriteContentType(w)
	jsonBytes, err := json.MarshalIndent(r.Data, "", "    ")
	if err != nil {
		return err
	}
	_, err = w.Write(jsonBytes)
	return err
}

// WriteContentType (IndentedJSON) writes JSON ContentType.
func (r IndentedJSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonContentType)
}

// Render (SecureJSON) marshals the given interface object and writes it with custom ContentType.
func (r SecureJSON) Render(w http.ResponseWriter) error {
	r.WriteContentType(w)
	jsonBytes, err := json.Marshal(r.Data)
	if err != nil {
		return err
	}
	// if the jsonBytes is array values
	if bytes.HasPrefix(jsonBytes, bytesconv.StringToBytes("[")) && bytes.HasSuffix(jsonBytes,
		bytesconv.StringToBytes("]")) {
		if _, err = w.Write(bytesconv.StringToBytes(r.Prefix)); err != nil {
			return err
		}
	}
	_, err = w.Write(jsonBytes)
	return err
}

// WriteContentType (SecureJSON) writes JSON ContentType.
func (r SecureJSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonContentType)
}

// Render (JsonpJSON) marshals the given interface object and writes it and its callback with custom ContentType.
func (r JsonpJSON) Render(w http.ResponseWriter) (err error) {
	r.WriteContentType(w)
	ret, err := json.Marshal(r.Data)
	if err != nil {
		return err
	}

	if r.Callback == "" {
		_, err = w.Write(ret)
		return err
	}

	callback := template.JSEscapeString(r.Callback)
	if _, err = w.Write(bytesconv.StringToBytes(callback)); err != nil {
		return err
	}

	if _, err = w.Write(bytesconv.StringToBytes("(")); err != nil {
		return err
	}

	if _, err = w.Write(ret); err != nil {
		return err
	}

	if _, err = w.Write(bytesconv.StringToBytes(");")); err != nil {
		return err
	}

	return nil
}

// WriteContentType (JsonpJSON) writes Javascript ContentType.
func (r JsonpJSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonpContentType)
}

// Render (AsciiJSON) marshals the given interface object and writes it with custom ContentType.
func (r AsciiJSON) Render(w http.ResponseWriter) error {
	r.WriteContentType(w)
	ret, err := json.Marshal(r.Data)
	if err != nil {
		return err
	}

	var buffer bytes.Buffer
	escapeBuf := make([]byte, 0, 6) // Preallocate 6 bytes for Unicode escape sequences

	for _, r := range bytesconv.BytesToString(ret) {
		if r > unicode.MaxASCII {
			escapeBuf = fmt.Appendf(escapeBuf[:0], "\\u%04x", r) // Reuse escapeBuf
			buffer.Write(escapeBuf)
		} else {
			buffer.WriteByte(byte(r))
		}
	}

	_, err = w.Write(buffer.Bytes())
	return err
}

// WriteContentType (AsciiJSON) writes JSON ContentType.
func (r AsciiJSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonASCIIContentType)
}

// Render (PureJSON) writes custom ContentType and encodes the given interface object.
func (r PureJSON) Render(w http.ResponseWriter) error {
	r.WriteContentType(w)
	encoder := json.NewEncoder(w)
	encoder.SetEscapeHTML(false)
	return encoder.Encode(r.Data)
}

// WriteContentType (PureJSON) writes custom ContentType.
func (r PureJSON) WriteContentType(w http.ResponseWriter) {
	writeContentType(w, jsonContentType)
}
