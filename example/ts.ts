import path from "path";
import { channel } from "process";

// @ts-ignore
import("./module.js").then((mod) => {
  return mod;
});

let variable: string = "Hello World";
let number: number = 19009;
let float: number = 19.99;
let boolean: boolean = true;
const symbol2: symbol = Symbol(42);
const bigint: bigint = BigInt(1e1);

variable = `${variable} from JS`;
number = new Number(999).valueOf();
float = -19.99;
number = Infinity;
float = NaN;
boolean = new Boolean(false).valueOf();

const undef: undefined = undefined;
const nul: null = null;

const arr: Array<any> = [
  "str",
  999,
  NaN,
  Infinity,
  true,
  false,
  undefined,
  null,
  { property: "property" },
  ["str", 999, NaN],
];

const [first, third]: [number, number] = [10, 20];

const arr2: Array<any> = [...arr, 3, 4];

const msg: string = boolean ? "yes" : "no";

const obj: {
  str: string;
  num: number;
  bool: boolean;
  time: Date;
  arr: Array<any>;
  obj2: { property: number };
  fn: (arg1: any) => any;
  afn: () => string;
} = {
  str: "str",
  num: 999,
  bool: true,
  time: new Date(),
  arr: ["str", 999, NaN],
  obj2: { property: 18 },
  fn: function (arg1: any) {
    return arg1;
  },
  afn: () => {
    return "str";
  },
};

const obj2: typeof obj & { b: number } = { ...obj, b: 99 };

const { str: myStr, missing = 42 } = { str: "hello" };

[10, 20, 30].at(-1);

"Hello".at(-2);

Object.hasOwn({ a: 1 }, "a");

// Added type assertion for the extended array
(arr as any).property.getFunction = function () {};

function baseFn(this: any, arg0: any, arg1: any, cb?: () => void) {
  const localVar = arg0;
  arg1.name = "new name";
  arg1.obj = {
    property: "property",
  };
  arg1.arr = ["str", 999, NaN];

  arg1.fn();

  this.obj.property = localVar;

  cb && cb();

  return this;
}

baseFn.call({}, {});

const arrowFn = async (arg: number = 1): Promise<number> => {
  // Note: arguments isn't available in arrow functions in TypeScript
  // This is modified to use rest parameters instead
  const localArgLen = 0; // arguments.length would be invalid
  const localArg = {}; // arguments[0] would be invalid

  let sum = localArgLen + arg;

  sum = Math.pow(sum, 2);

  // localArg assignment removed as it's not valid in this context

  return sum;
};

function* gen(): Generator<number, void, unknown> {
  yield 1;
  yield 2;
}

class Parent {
  static var: string;
  #secret: number = 42;
  static #count: number = 0;

  name: string;

  constructor(name: string) {
    this.name = name;
    Parent.var = "static var";
  }

  static staticMethod(): never {
    try {
      throw new Error("Low-level error");
    } catch (e) {
      throw new Error("High-level error", { cause: e });
    }
  }

  method(): number {
    const p = path.basename;
    Parent.#count += p.length; // Assuming you meant to use length
    return this.#secret;
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

const pmt: Promise<void> = new Promise((resolve, reject) => {
  resolve(1);
  reject();
})
  .then(() => {})
  .catch(() => {})
  .finally(() => void 0);

Promise.all([pmt, pmt, pmt]).then(() => {});
Promise.resolve().then(() => {});

await arrowFn(10);

new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
  123456
);

// Note: fs needs to be imported
import fs from "fs";
fs.writeFile("path/to/file", "content", (err: NodeJS.ErrnoException | null) => {});

// Note: window is a browser API, not available in Node.js
// This would need to be in a browser environment or use DOM types
declare const window: any;
window.document.body.innerHTML = `<h1>${variable}</h1>`;
window.setTimeout(() => {});
setInterval(() => {}, 1000);
globalThis.setTimeout(() => console.log("OK"));
// requestAnimationFrame is also a browser API
declare const requestAnimationFrame: any;
requestAnimationFrame(() => {});

arr.forEach((item: any, index: number, arr: any[]) => {
  console.log(item, index, arr);
});

arr.map((item: any, index: number, arr: any[]) => {
  console.log(item, index, arr);
  return item;
});

labelLoop: for (let i = 0; i < arr.length; i++) {
  if (i === 3) break labelLoop;
}

// Note: 'object' is not defined in the original code
declare const object: any;
for (const element of object) {
  if (element === 10) {
  }
}

const val: string = variable ?? "default";

// Note: 'user' is not defined in the original code
declare const user: any;
console.log(user.profile?.name);

const target: { message: string } = { message: "Hello" };
const handler: ProxyHandler<typeof target> = {
  get(obj, prop, receiver) {
    console.log(`get ${String(prop)}`);
    return Reflect.get(obj, prop, receiver);
  },
  set(obj, prop, value, receiver) {
    console.log(`set ${String(prop)} = ${value}`);
    return Reflect.set(obj, prop, value, receiver);
  },
};
const proxy = new Proxy(target, handler);

console.log(proxy.message);
proxy.message = 'Hello';

/**
 * link: https://google.com
 */

// this example is for testing

/**
 * 计算两个数字之和
 * @namespace MyLib.Utils
 * @param {number} a - 第一个加数
 * @returns {number} 两数之和
 * @class
 * @typedef {Object} User
 * @property {number} id - 用户唯一标识
 * @callback ProcessCallback
 */

export const PI: number = 3.14;
export function fn(): void {}
export default class MyClass {}
export {
  channel,
  number,
  float,
  symbol2,
  bigint,
  undef,
  nul,
  first,
  third,
  arr2,
  msg,
  obj2,
  myStr,
  missing,
  gen,
  Child,
  val,
};

// Note: In TypeScript, module.exports is less common - typically you'd use export
const helper = {
  PI,
  fn,
  MyClass,
  channel,
  number,
  float,
};
export { helper };

// For CommonJS compatibility
module.exports.helper = helper;
module.exports = exports = {
  apiKey: "12345",
  apiUrl: "https://api.example.com",
};