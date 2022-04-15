// async & await
// clear style of using promise:)

// 1. Async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         resolve('sill');
//     });
//     // do network request in 10 secs...
// }

async function fetchUser() {
    // do network request in 10 secs...
    return 'sill';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}

async function pickFruits() {
    // return getApple()
    // .then(apple => {
    //     return getBanana().then(banana => `${apple} + ${banana}`);
    // });
    const applePromise = getApple(); // Promise를 만들자마자 코드가 실행되므로 병렬적 기능 수행
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise API
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(` + `))
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // 가장 먼저 전달되는 함수를 출력함
}

pickOnlyOne().then(console.log);