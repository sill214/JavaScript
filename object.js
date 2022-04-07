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
// for (key in obj)
console.clear(); // 이전 console.log 가 지워짐
for (let key in sill) {
    console.log(key);
}

// for (value of interable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for(let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'sill', age: 20 };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);