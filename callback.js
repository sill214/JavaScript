'use strict';

// Synchronous callback
function printImmediately(print) {
    print();
}

// Asynchrounous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// JavaScript is synchronous
// Execute the code block by orger after hoisting
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기

printImmediately(() => console.log('hello')); // 동기

printWithDelay(() => console.log('Asynchrounous callback'), 2000); // 비동기

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'sill' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'sill') {
                onSuccess({name: 'sill', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
            );
    },
    error => { 
        console.log(error);
    }
);