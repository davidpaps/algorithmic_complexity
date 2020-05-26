"use strict";

class Timing {
  constructor(algorithm) {
    this.algorithm = algorithm;
    this.times = [];
  }

  runNumbers = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createNumberArray(elements);
        if (this.algorithm === sort || this.algorithm === myQuickSort) {
          this._shuffleArray(array);
        }
        this._duplicateArray(array);
        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
  };

  runZeroOne = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createZeroOneArray(elements);
        this._shuffleArray(array);
        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
  };

  runWords = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = this._createWordArray(elements);
        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
  };

  runFibonacci = (inputSize, step) => {
    for (let elements = 0; elements < inputSize; elements += step) {
      {
        let array = elements;
        let start = performance.now();
        this.algorithm(array);
        let end = performance.now();
        let time = end - start;
        this._addTimes(this.times, elements, time);
      }
    }
  };

  _createWordArray = (inputSize) => {
    let words = ["a", "b", "c", "a", "d", "e", "b", "f", "g", "b"];
    let array = Array(inputSize).fill(words).flat();
    return array;
  };

  _createZeroOneArray = (inputSize) => {
    let zero = Array(inputSize / 2).fill(0);
    let one = Array(inputSize / 2).fill(1);
    let array = [];

    for (let i = 0; i < zero.length; i++) {
      array.push(zero[i]);
    }

    for (let i = 0; i < one.length; i++) {
      array.push(one[i]);
    }

    return array;
  };

  _createNumberArray = (inputSize) => {
    return [...Array(inputSize).keys()];
  };

  _shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  _duplicateArray = (array) => {
    if (this.algorithm === duplicate || this.algorithm === myDuplicate) {
      let dupArray = [...Array(array.length).keys()];
      for (let i = 0; i < dupArray.length; i++) {
        array.push(dupArray[i]);
      }
    }
  };

  _addTimes = (array, inputSize, time) => {
    array.push({ inputSize: inputSize, time: time });
  };
}
