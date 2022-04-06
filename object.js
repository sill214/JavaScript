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

// 2. Computed properties
// key should be always string
console.log(sill.name);
console.log(sill['name']);
sill['hasJob'] = true;
console.log(sill.hasJob);

function printValues(obj, key) {
    // console.log(obj.key); // Error
    console.log(obj[key]);
}
printValues(sill, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
// const person4 = makePerson('sill', 20);
const person4 = new Person('sill', 20);
console.log(person4);

// 4. Constructor Funciton 
function Person(name, age) {
    // return {
    //     name, // name: name
    //     age, // age: age
    // };

    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: Property exsitence check(key in obj)
console.log('name' in sill);
console.log('age' in sill);
console.log('random', sill);
// console.log(sill.random) // undefined

// 6. for..in vs for..of
