"use strict";

class Timing {
  constructor() {
    this.reverseTimes = [];
    this.sortTimes = [];
  }

  reverseFunction = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createArray(elements);
        let start = performance.now();
        array.reverse();
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.reverseTimes, elements, time);
      }
    }
  };

  sortFunction = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createArray(elements);
        // array.sort(() => Math.random() - 0.5);
        this._shuffleArray(array);
        let start = performance.now();
        array.sort();
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.sortTimes, elements, time);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };

  _createArray = (inputSize) => {
    return [...Array(inputSize).keys()];
  };

  // for (let i = array.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));

  _shuffleArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
}
