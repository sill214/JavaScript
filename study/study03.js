'use strict';

console.clear();

// Array
// 1. Splice
// arr.splice(n, m): n -> 시작, m -> 갯수, 특정 요소를 지우는 메소드
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// arr.splice(n, m, x): 특정 요소를 지우고 추가
arr.splice(1, 2, 100, 200, 300);
console.log(arr);

let arr1 = ["나는", "철수", "입니다"]
arr1.splice(1, 0, "대한민국", "소방관");
console.log(arr1);

// arr.splice(): 삭제된 요소를 반환
let result = arr.splice(1, 2);
console.log(arr);
console.log(result);

// 2. Slice
// arr.slice(n, m): n부터 m까지 반환(m은 포함하지 않고, 바로 앞자리까지 의미)
let arr2 = [1, 2, 3, 4, 5];
arr2.slice(1, 4);
console.log(arr2.slice(1, 4));

// 3. Concat(arr2, arr3 ...): 합쳐서 새 배열 반환
let arrNum = [1, 2];
arrNum.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
arrNum.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]
console.log(arrNum); // 배열 자체가 변하는 것은 아님!
console.log(arrNum.concat([3, 4], [5, 6]));

// 4. forEach(fn): 배열 반복
let users = ['sill', 'Mike', 'Tom'];
// users.forEach((item, index, arr) => {});
users.forEach((name, index) => {
    console.log(`${index}. ${name}`);
});

// 5. IndexOf / LastIndexOf
let arrIndexOf = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3); // 2
arr.indexOf(3, 3); // index3부터 탐색! (4 ~ ), 7
arr.lastIndexOf(3); // 끝에서부터 탐색, 7

// 6. Includes: 포함하는지 확인!
let arrInclude = [1, 2, 3];
arr.includes(2); // true
arr.includes(8); // false
