'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    brithDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // jump라는 함수는 JSON에 포함되지 않음! 함수는 object에 있는 데이터가 아니기 때문! symbol같은 자바스크립트에서만 있는 특별한 데이터도 포함되지 않음

json = JSON.stringify(rabbit, ['name']); // 원하는 property만 골라서 정의하면 해당 property만 JSON으로 변환
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'sill' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'brithDate' ? new Date(value) : value;
}); // string으로 serialize된 obj(함수 포함되지 않음!)으로부터 JSON을 만듦
console.log(obj); 

rabbit.jump();
// obj.jump(); // Error!
console.log(rabbit.brithDate.getDate());
console.log(obj.brithDate.getDate());