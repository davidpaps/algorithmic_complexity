"use strict";

class Timing {
  constructor(algorithm) {
    this.algorithm = algorithm;
    this.times = [];
  }

  run = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createArray(elements);
        this._shuffleArray(array);
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
    if (this.algorithm === sort) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const myShuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const myReverse = (array) => {
  let reversedArray = [];
  for (let element = array.length - 1; element >= 0; element--) {
    reversedArray.push(array[element]);
  }
  return reversedArray;
};
