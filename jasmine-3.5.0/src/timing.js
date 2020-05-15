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
        this._duplicateArray(array);
        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
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

  _duplicateArray = (array) => {
    let dupArray = [...Array(array.length).keys()];
    if (this.algorithm === duplicate || this.algorithm === myDuplicate) {
      for (let i = 0; i < dupArray.length; i++) {
        array.push(dupArray[i]);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };
}

const duplicate = (array) => {
  return [...new Set(array)];
};

const sort = (array) => {
  array.sort();
};

const last = (array) => {
  array.slice(-1)[0];
};

const myDuplicate = (array) => {
  let counter = {};
  let duplicates = [];
  array.forEach((element) => {
    if (counter[element] === undefined) {
      counter[element] = 1;
    } else {
      counter[element] += 1;
      if (counter[element] === 2) {
        duplicates.push(element);
      }
    }
  });
  return duplicates;
};
