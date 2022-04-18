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
            this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();