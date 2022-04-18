'use strict';

class Counter {
    // 객체, 변수 생성에 사용되는 메소드
    constructor() {
        this.counter = 0;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0) {
            runIf5Times(this.counter);
        }
    }
}

const coolCounter = new Counter();

function printSomething(num) {
    console.log(`yo! ${num}`);
}
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);