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