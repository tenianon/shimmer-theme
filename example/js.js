var path = require('path');
import { channel } from 'process';
import('./module.js').then((mod) => {
  return mod;
});

var variable = 'Hello World';
let number = 19009;
let float = 19.99;
let boolean = true;
const symbol2 = Symbol(42);
const bigint = BigInt(1e1);

variable = `${variable} from JS`;
number = new Number(999);
float = -19.99;
number = Infinity;
float = NaN;
boolean = new Boolean(false);

const undef = undefined;
const nul = null;

const arr = [
  'str',
  999,
  NaN,
  Infinity,
  true,
  false,
  undefined,
  null,
  { property: 'property' },
  ['str', 999, NaN],
];

const [first, third] = [10, 20, 30];

const arr2 = [...arr, 3, 4];

const msg = boolean ? 'yes' : 'no';

const obj = {
  str: 'str',
  num: 999,
  bool: true,
  time: new Date(),
  arr: ['str', 999, NaN],
  obj2: { property: 18 },
  fn: function (arg1) {
    return arg1;
  },
  afn: () => {
    return 'str';
  },
};

const obj2 = { ...obj, b: 99 };

const { str: myStr, missing = 42 } = { str: 'hello' };

[10, 20, 30].at(-1);

'Hello'.at(-2);

Object.hasOwn({ a: 1 }, 'a');

arr.property.getFunction = function () {};

function baseFn(arg0, arg1, cb) {
  const localVar = arg0;
  arg1.name = 'new name';
  arg1.obj = {
    property: 'property',
  };
  arg1.arr = ['str', 999, NaN];

  arg1.fn();

  this.obj.property = localVar;

  cb && cb();

  return this;
}

baseFn({})();

Array.from('')

const arrowFn = async (arg = 1) => {
  const localArgLen = arguments.length;
  const localArg = arguments[0];

  const sum = localArgLen + arg;

  sum = Math.pow(sum, 2);

  localArg = JSON.stringify(localArg);

  return sum;
};

function* gen() {
  yield 1;
  yield 2;
}

class Parent {
  static var;
  #secret = 42;
  static #count = 0;

  constructor(name) {
    this.name = name;
    Parent.var = 'static var';
  }

  static staticMethod() {
    try {
      throw new Error('Low-level error');
    } catch (e) {
      throw new Error('High-level error', { cause: e });
    }
  }

  method() {
    const p = path.basename;
    Parent.#count += p;
    return this.#secret;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const pmt = new Promise((resolve, reject) => {
  resolve();
  reject();
})
  .then(() => {})
  .catch(() => {})
  .finally(() => void 0);

Promise.all([pmt, pmt, pmt]).then(() => {});
Promise.resolve().then(() => {});

await arrowFn(10);

new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
  123456,
);

fs.rewriteFile('path/to/file', 'content', (err) => {});

window.document.body.innerHTML = `<h1>${variable}</h1>`;
window.setTimeout(() => {});
setInterval(() => {}, 1000);
globalThis.setTimeout(() => console.log('OK'));
requestAnimationFrame(() => {});

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

arr.map((item, index, arr) => {
  console.log(item, index, arr);
});

labelLoop: for (let i = 0; i < arr.length; i++) {
  if (i === 3) break labelLoop;
}

for (const element of object) {
  if (element === 10) {
  }
}

const val = null ?? 'default';

console.log(user.profile?.name);

const target = { message: 'Hello' };
const handler = {
  get(obj, prop, receiver) {
    console.log(`get ${prop}`);
    return Reflect.get(obj, prop, receiver);
  },
  set(obj, prop, value, receiver) {
    console.log(`set ${prop} = ${value}`);
    return Reflect.set(obj, prop, value, receiver);
  },
};
const proxy = new Proxy(target, handler);

console.log(proxy.message);
proxy.newProp = 42;

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

export const PI = 3.14;
export function fn() {}
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
  Reflect,
};

module.exports.helper = {
  PI,
  fn,
  MyClass,
  channel,
  number,
  float,
};

exports = module.exports = {
  apiKey: '12345',
  apiUrl: 'https://api.example.com',
};

const a = document.querySelector('.monaco-grid-view');
const b = document.createElement('div');
b.style.width = '100%';
b.style.height = '100%';
b.style.position = 'absolute';
b.style.top = '0px';
b.style.left = '0px';
b.style.zIndex = 999999;
b.style.opacity = 0.08;
b.style.backgroundImage = `url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)`;
b.style.pointerEvents = 'none';

a.append(b);
