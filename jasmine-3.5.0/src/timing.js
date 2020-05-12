"use strict";

class Timing {
  constructor(algorithm) {
    this.algorithm = algorithm;
    this.times = [];
  }

  time = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createArray(elements);
        if (this.algorithm === sort) {
          this._shuffleArray(array);
        }

        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };

  _createArray = (inputSize) => {
    return [...Array(inputSize).keys()];
  };

  _shuffleArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
}

const reverse = (array) => {
  array.reverse();
};

const sort = (array) => {
  array.sort();
};

const last = (array) => {
  array.slice(-1)[0];
};
