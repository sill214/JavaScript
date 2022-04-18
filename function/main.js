'use strict';

class Counter {
    // 객체, 변수 생성에 사용되는 메소드
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0) {
            // if(this.callback) { // undefined가 아니면 호출!
            //     this.callback(this.counter)
            // }
            this.callback && this.callback(this.counter); // 위의 if문과 동일!
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}

function alertNum(num) {
    alert(`alert! ${num}`);
}

// const coolCounter = new Counter(printSomething);

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);