"use strict";

class Sort {
  constructor() {
    this.timingSort = new Timing(sort);
    this.timingMyQuickSort = new Timing(myQuickSort);
    this.timingMyMergeSort = new Timing(myMergeSort);
    this.timingMySelectionSort = new Timing(mySelectionSort);
    this.timingMyInsertionSort = new Timing(myInsertionSort);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("sort").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS sort()",
            data: data[0],
            fill: false,
            hidden: false,
            backgroundColor: "#3792cb",
            borderColor: "#3792cb",
            borderWidth: 2,
            pointBackgroundColor: "#3792cb",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#3792cb",
          },
          {
            label: "My quickSort()",
            data: data[1],
            fill: false,
            hidden: false,
            backgroundColor: "#629632",
            borderColor: "#629632",
            borderWidth: 2,
            pointBackgroundColor: "#629632",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#629632",
          },
          {
            label: "My mergeSort()",
            data: data[2],
            fill: false,
            hidden: false,
            backgroundColor: "#FFFF00",
            borderColor: "#FFFF00",
            borderWidth: 2,
            pointBackgroundColor: "#FFFF00",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#FFFF00",
          },
          {
            label: "My selectionSort()",
            data: data[3],
            fill: false,
            hidden: false,
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            borderWidth: 2,
            pointBackgroundColor: "#FF0000",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#FF0000",
          },
          {
            label: "My insertionSort()",
            data: data[4],
            fill: false,
            hidden: false,
            backgroundColor: "#9370DB",
            borderColor: "#9370DB",
            borderWidth: 2,
            pointBackgroundColor: "#9370DB",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#9370DB",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Comparison of Sort Functions",
          fontSize: 20,
          fontStyle: "bold",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Number of Elements in Array",
                fontSize: 16,
                fontStyle: "bold",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
              },
              scaleLabel: {
                display: true,
                labelString: "Milliseconds",
                fontSize: 16,
                fontStyle: "bold",
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 16,
            fontStyle: "bold",
            usePointStyle: true,
          },
        },
      },
    });
  };

  renderChart = (inputSize, step) => {
    this.generateLabels(inputSize, step);
    this.sortData(inputSize, step);
    this.myQuickSortData(inputSize, step);
    this.myMergeSortData(inputSize, step);
    this.mySelectionSortData(inputSize, step);
    this.myInsertionSortData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingSort.runNumbers(inputSize, step);

    this.timingSort.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  sortData = (inputSize, step) => {
    this.timingSort.runNumbers(inputSize, step);
    let sortData = [];
    this.timingSort.times.forEach((iteration) => {
      sortData.push(iteration.time);
    });
    this.data.push(sortData);
  };

  myQuickSortData = (inputSize, step) => {
    this.timingMyQuickSort.runNumbers(inputSize, step);
    let myQuickSortData = [];
    this.timingMyQuickSort.times.forEach((iteration) => {
      myQuickSortData.push(iteration.time);
    });
    this.data.push(myQuickSortData);
  };

  myMergeSortData = (inputSize, step) => {
    this.timingMyMergeSort.runNumbers(inputSize, step);
    let myMergeSortData = [];
    this.timingMyMergeSort.times.forEach((iteration) => {
      myMergeSortData.push(iteration.time);
    });
    this.data.push(myMergeSortData);
  };

  mySelectionSortData = (inputSize, step) => {
    this.timingMySelectionSort.runNumbers(inputSize, step);
    let mySelectionSortData = [];
    this.timingMySelectionSort.times.forEach((iteration) => {
      mySelectionSortData.push(iteration.time);
    });
    this.data.push(mySelectionSortData);
  };

  myInsertionSortData = (inputSize, step) => {
    this.timingMyInsertionSort.runNumbers(inputSize, step);
    let myInsertionSortData = [];
    this.timingMyInsertionSort.times.forEach((iteration) => {
      myInsertionSortData.push(iteration.time);
    });
    this.data.push(myInsertionSortData);
  };
}

const sort = (array) => {
  array.sort((a, b) => a - b);
};

const myQuickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let low = [];
  let high = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? low.push(array[i]) : high.push(array[i]);
  }

  return myQuickSort(low).concat(pivot, myQuickSort(high));
};

const myMergeSort = (array) => {
  if (array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let sortedLeftArray = myMergeSort(array.slice(0, mid));
  let sortedRightArray = myMergeSort(array.slice(mid, array.length));
  return mergeArrays(sortedLeftArray, sortedRightArray);

  function mergeArrays(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
};

const mySelectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

const myInsertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
};
