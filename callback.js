'use strict';

// Synchronous callback
function printImmediately(print) {
    print();
}

// Asynchrounous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// JavaScript is synchronous
// Execute the code block by orger after hoisting
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기

printImmediately(() => console.log('hello')); // 동기

printWithDelay(() => console.log('Asynchrounous callback'), 2000); // 비동기