// 1. Use strict
// added in ES5
// use this for Valina JavaScript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name'

{
let name = 'sill';
console.log(name);
name = 'hello';
console.log(name);

console.log(globalName);
}

console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top;  어디에 선언했는가와 상관없이 항상 선언을 제일 위로 끌어 올려주는 것)
// var는 블럭스콥을 무시함
{
console.log(age);
age = 4;
var age;
}
console.log(age);

// 3. Contants
// const(한 번 할당하면 값이 변하지 않음 -> favor immutale data type always)
// favor immutale data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const datyInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item(더 이상 작은 단위로 나뉘어질 수 없는, 한 가지 타입): number, string, boolean, null, undefined, symbol
// object(single 단위를 여러 개 묶음), box container
// funcion, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't use it yet)
const bigInt = 123456789013456789012345678901234567890; // over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'a';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symboldms .description을 붙여야지 값을 콘솔로 찍을 수 있음

// object, real-life object, data structure
const sill = {name: 'sill', age: 20};
sill.age = 21; // 변경 가능!

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // type -> ㄴstring
text = 4;
console.log(`value: ${text}, type: ${typeof text}`); // type -> number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value 75 but, type -> string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value 4, type -> number
// console.log(text.charAt(0)) -> text type은 string이기 때문에 에러 발생
