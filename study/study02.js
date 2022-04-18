'use strict';

console.clear();

// 1. Symbol
const a = Symbol(); // 유일한 식별자, new를 붙이지 않음
const b = Symbol();

console.log(a);
console.log(b); // 둘 다 Symbol()이 나오나 일치 연산자, 동등 연산자를 사용할 경우(===, ==) false

const id = Symbol('id');
const id2 = Symbol('id'); // id === id2 -> false, id == id2 -> false

const user = {
    name: 'sill',
    age: 20,
    [id]: 'myid'
}
console.log(user);
Object.keys(user); // Symbol(id) 나오지 않음! Object.values() Object.entries() 모두 마찬가지임!
Object.getOwnPropertySymbols(user); // [Symbol(id)]
Reflect.ownKeys(user); // ["name", "age", Symbol(id)]

const user1 = {
    name: 'sill',
    age: 20,
}

// Symbol.for(): 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유

const id3 = Symbol.for('id');
const id4 = Symbol.for('id');

console.log(id3 === id4); // ture
Symbol.keyFor(id3); // id