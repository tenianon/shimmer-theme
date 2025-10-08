

const multiply = (a: number, b: number): number => a * b;

function greet(name: string, greeting: string = "Hello"): void {
  console.log(`${greeting}, ${name}!`);
}

function sum(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

let value: string | number;
value = "hello";
value = 42;

type A = { a: string };
type B = { b: number };
type C = A & B; // { a: string, b: number }

type Point = { x: number; y: number };
type ID = string | number;

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
const color: Color = Color.Red;

function identity<T>(arg: T): T {
  return arg;


  interface Box<T> {
    value: T;
  }
  const box: Box<number> = { value: 42 };
}


function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

class Animal {
  constructor(public name: string) {} // 自动绑定 this.name
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function padLeft(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.trim();
}

if (Animal instanceof Dog) {
 
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

type PartialUser = Partial<{ name: string; age: number }>; // 所有属性可选
type ReadonlyUser = Readonly<{ name: string }>; // 只读
type PickUser = Pick<{ name: string; age: number }, "name">; // 选择部分属性
type OmitUser = Omit<{ name: string; age: number }, "age">; // 排除部分属性


function log(
  target: any,
  key: string,
  descriptor: TypedPropertyDescriptor<(a: number, b: number) => number>
): TypedPropertyDescriptor<(a: number, b: number) => number> {
  const originalMethod = descriptor.value!;
  descriptor.value = function (a: number, b: number) {
    console.log(`Calling ${key} with args:`, a, b);
    return originalMethod.call(this, a, b);
  };
  return descriptor;
}

class Calculator {
  // @ts-ignore
  @log
  add(a: number, b: number) {
    return a + b; // 移除了未定义的 `c`
  }
}

abstract class Animal2 {
  constructor(public name: string, protected age: number) {}
}