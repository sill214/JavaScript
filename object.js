'use strict';

// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const sill = {name: 'sill', age: 20};
print(sill);

sill.hasJob = true;
console.log(sill.hasJob);

delete sill.hasJob;
console.log(sill.hasJob);