'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times(재사용 가능)
// - performs a task or calculates a vlaue


// 1. Function declaraion
// funcion name(param1, param2) { body... return; }
// one funcion === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPint -> createCard, createPoint
// funcion is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hi!');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const sill = { name: 'sill'};
changeName(sill);
console.log(sill);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { // showMessage에 from param이 없을 경우(undefined) Default로 unknown을 넣어주겠다는 의미!
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { // ... -> 배열 형태로 전달
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { // 위와 상동
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); // 위와 상동
}
printAll('dream', 'coding', 'sill');

// 5. Loop scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        let childMessage = 'hi';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
//good
// bad
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class funcion
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is definded. (hoisted)
// a funtion expression is created when the execution reaches it.
const print = function () { // anonymous funcion
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using funcion expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous funcion
const printYes = function () {
    console.log('yes!');
};

// named funcion 
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow funcion
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!')
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 호출
(function hello() {
    console.log('IIFE');
})();
