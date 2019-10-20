const range = require('lodash/range');
class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.list = range(min, max + 1, 1);
        this.first = 0;    //left endpoint
        this.last = this.list.length - 1;   //right endpoint
    }

    guess() {
        this.middle = Math.ceil((this.first + this.last) / 2);
        return this.list[this.middle];
    }

    lower() {
        this.last = this.middle - 1;
    }

    greater() {
        this.first = this.middle + 1;
    }
}

module.exports = GuessingGame;

