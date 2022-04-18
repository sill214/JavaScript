'use strict';

console.clear();

// 1. 변수

let name;
name = 'sill';
console.log(name);

function showName() {
    console.log(name);
    name = 'jiwon'; // let은 값이 재할당이 가능한 상수
    console.log(`name ${name}`);
    let age = 20;
}

showName();
// console.log(age); // 함수 스코프 밖에서 호출했으므로 출력되지 않음

// console.clear();

const age = 20; // const는 값이 변하지 않는 상수! let은 재할당이 가능한 함수
console.log(age);

function showAge() {
    console.log(age);
    // age = 30; // 이미 선언한 변수에 새로운 값을 할당하였으므로 Error가 발생!, Assignment to constant variable.
    // console.log(`age ${age}`);
}

showAge();

// var는 되도록 사용하지 말 것!(호이스팅이 되는 관계로)
console.log(address); // undefined
var address = '서울';
console.log(`address ${address}`);


// 2. 생성자 함수

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}

let user1 = new User('red', 10);
let user2 = new User('blue', 20);
let user3 = new User('sill', 30);

function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price} 입니다.`);
    };
    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 5000);

item3.showPrice();

// 3. Computed property

let a = 'age';
const user4 = {
    name: 'sill',
    [a]: 30 // age: 30
};

console.log(user4);

const user5 = {
    [1 + 4]: 5,
    ['안녕' + '하세요']: "Hello"
};

console.log(user5);

// 4. Method

const user6 = {
    name: 'sill',
    age: '20'
}

// Object.assign()
const cloneUser = user6; // clone이 되지 않음, 하나의 객체에 두 변수가 접근하는 형식이므로 cloneUser이 변경되면 user6도 함께 변경됨!
const newUser = Object.assign({}, user6); // 동일하게 객체 복사
Object.assign({ gender: 'female'}, user6);

// Object.keys(): 키 배열 반환
const keys = Object.keys(user6); // ["name", "age"]
console.log(`keys: ${keys}`);

// Object.values(): 값 배열 반환
const values = Object.values(user6); // ["sill", 20]
console.log(`values: ${values}`);

// Object.entries(): 키/값 배열 반환
const entries = Object.entries(user6); // [ ["name", "sill"], ["age", 20] ]
console.log(`entries: ${entries}`);

// Object.fromEntries(): 키/값 배열을 객체로
const arr = 
    [
        ['name', 'sill'],
        ['age', 20],
        ['gender', 'female']
    ];

const fromEntries = Object.fromEntries(arr); // { name: 'sill', age: 20, gender: 'female'}
console.log(`fromEntries: ${fromEntries}`);