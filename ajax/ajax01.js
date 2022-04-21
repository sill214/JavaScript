'use strict';

// 1. Old 
// const ajax = new XMLHttpRequest();
// ajax.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         console.log(ajax.responseText);
//     }
// };
// ajax.open("GET", "https://codingapple1.github.io/price.json", true);
// ajax.send();

// 2. fetch
// fetch('https://codingapple1.github.io/price.json')
//     .then((response) => {
//         if(!response.ok) {
//             throw new Error('400 or 500 Error!')
//         }
//         return response.json(); // 수신한 데이터
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(() => {
//         console.log('Error!');
//     });

// Async or await
// async function getData() {
//     const response = await fetch('https://codingapple1.github.io/price.json');
//     if(!response.ok) {
//         throw new Error('400 or 500 Error!');
//     }
//     const result = await response.json();
//     console.log(result);
// }
// getData().catch(() => {
//     console.log('Error!')
// });

// 3. 외부 라이브러리 방식
// Axios
axios.get('https://codingapple1.github.io/price.json')
    .then((result) => {
        console.log(result.data);
    })
    .catch(() => {
        console.log('Error!');
    })
    