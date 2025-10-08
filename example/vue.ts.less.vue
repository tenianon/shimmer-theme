<script setup lang="ts">
type Foo = {
  name: string;
};

type DeepPick<T, K extends string> = K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? { [P in First]: DeepPick<T[First], Rest> }
    : never
  : K extends keyof T
    ? { [P in K]: T[P] }
    : never;

function deepPick<T, K extends string>(
  obj: T,
  key: K,
  value: any,
  pass: number,
): DeepPick<T, K> {
  const a = value | pass;

  return key.split('.').reduce((acc, key) => acc[key], obj) as DeepPick<T, K>;
}

const a = 1000000;


Array.from('')

</script>
<template>
  <div>
    <p>vue.ts.less</p>
    <vue-component></vue-component>
    <VueComponent :num="123123123"></VueComponent>
  </div>
</template>
<style lang="less">
// 变量
@primary-color: #3498db;
@padding: 10px;
@font-stack: 'Helvetica, sans-serif';

// 嵌套
.navbar {
  background: @primary-color;

  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;

      &:hover {
        background: darken(@primary-color, 10%);
      }

      a {
        color: red;
        text-decoration: none;
      }
    }
  }
}

// 混入（mixin）
.rounded(@radius: 5px) {
  border-radius: @radius;
}

.button {
  .rounded(10px);
  padding: @padding;
  background: @primary-color;
}

// 多参数混入
.shadow(@x: 0, @y: 0, @blur: 5px, @color: rgba(0, 0, 0, 0.3)) {
  box-shadow: @x @y @blur @color;
}

// 嵌套属性
.box {
  .border {
    width: 1px;
    color: @primary-color;
  }
}

// extend 继承
.alert {
  padding: 10px;
  border: 1px solid red;
}
.error {
  &:extend(.alert);
  background: pink;
}

// 运算
.width {
  width: (100% / 3);
}
.spacing {
  padding: @padding * 2;
  margin: (@padding + 5px);
}

// 内置函数
.color {
  background: lighten(@primary-color, 20%);
  border-color: saturate(@primary-color, 10%);
}
.font {
  font-size: ceil(13.6px);
  line-height: floor(1.8);
  width: percentage(0.25);
}

// 条件判断
.is-mobile(@bool) when (@bool = true) {
  .container {
    max-width: 100%;
  }
}
.is-mobile(false);
.is-mobile(true);

// 循环（递归）
.loop(@i) when (@i > 0) {
  .col-@{i} {
    width: (100% / 12) * @i;
  }
  .loop(@i - 1);
}
.loop(12);

// 字符串插值与动态选择器
@theme: dark;
.theme-@{theme} {
  color: #fff;
}

// 导入其他 LESS 文件
@import 'variables.less';
@import (reference) 'mixins.less';
@import (inline) 'reset.css';
@import (less) 'styles.less';

// 作用域规则
@color: black;

.scope {
  @color: red;
  color: @color;
}
.other {
  color: @color;
}

// 注释
// 单行注释
/* 多行注释 */

// 自定义函数（通过递归模拟）
.loop-steps(@i, @max) when (@i =< @max) {
  .step-@{i} {
    left: (10% * @i);
  }
  .loop-steps(@i + 1, @max);
}
.loop-steps(1, 5);
</style>
