'use strict';

// Array

// 1. Declration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index posititon
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 인덱스

// 3. Looping over an array
// print all fruits
console.clear();

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('레몬');
console.log(fruits);

// shift: remove an item to the begining
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('레몬', '복숭아');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '수박');
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['망고', '키위'];
const newFruits = fruits.concat(fruits2)
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));

// includes
console.log(fruits.includes('레몬'));
console.log(fruits.includes('코코넛'));


// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits.indexOf('사과')); // 순서대로 진행하다가 사과를 만나면 멈춤!
console.log(fruits.lastIndexOf('사과')); // 뒤에서부터 진행하다가 사과를 만나면 멈춤!