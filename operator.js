'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`stirng literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation; 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`counter: ${counter}, preIncrement: ${preIncrement}`); // 3, 3

const postIncrement =  counter++;
// postIncrement = counter
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /+ y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// ||, finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // cf. 심플한 함수를 앞으로 가고 check()처럼 헤비한 함수는 뒤로 가게 함! why? 어차피 or은 true가 나오면 연산 멈춤

// &&, finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if ( nullableObject != null) {
//     nullableObject.something;
// }

// !(not)
console.log(!value1);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log("aaa");
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sill1 = { name: 'sill' };
const sill2 = { name: 'sill' };
const sill3 = sill1;
console.log(sill1 == sill2); // false
console.log(sill1 === sill2); // false
console.log(sill1 === sill3); // true

// equality - question
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null ===  undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'sill';
if (name === 'sill') {
    console.log('Welcome, Sill!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'sill' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('IE');
        break;
    case 'Chrome':
        // console.log('Chrome');
        // break;        
    case 'Firefox':
        // console.log('Firefox');
        console.log('Chrome or Firefox');        
        break;
    default:
        console.log('default');        
        break;
}

// 11. Loop
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do wihle loop, bod code is executed first,
// then check the condifion.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2) {
    // inline variable declaraion
    console.log(`inline variable for: ${i}`);
}

// nested loop
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, contine
// Q1. interate from 0 to 10 and print only even numbers(use contine)
for (let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`Q1. ${i}`);
}

// Q2. interate from 0 to 10 and print numbers numtil reaching 8 (use break)
for(let i = 1; i < 11 ; i++) {
    if(i > 8) {
        break;
    }
    console.log(`Q2. ${i}`);
} 