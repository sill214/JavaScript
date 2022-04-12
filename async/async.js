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
    await delay(3000);
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}

function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    })
}