"use strict";

class Reverse {
  constructor() {
    this.timingReverse = new Timing(reverse);
    this.timingMyReverse = new Timing(myReverse);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("reverse").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS reverse()",
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
            label: "My reverse()",
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
        ],
      },
      options: {
        title: {
          display: true,
          text: "Comparison of Reverse Functions",
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
    this.reverseData(inputSize, step);
    this.myReverseData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingReverse.runNumbers(inputSize, step);

    this.timingReverse.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  reverseData = (inputSize, step) => {
    this.timingReverse.runNumbers(inputSize, step);
    let reverseData = [];
    this.timingReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time);
    });
    this.data.push(reverseData);
  };

  myReverseData = (inputSize, step) => {
    this.timingMyReverse.runNumbers(inputSize, step);
    let myReverseData = [];
    this.timingMyReverse.times.forEach((iteration) => {
      myReverseData.push(iteration.time);
    });
    this.data.push(myReverseData);
  };
}

const reverse = (array) => {
  return array.reverse();
};

const myReverse = (array) => {
  let reversedArray = [];
  for (let element = array.length - 1; element >= 0; element--) {
    reversedArray.push(array[element]);
  }
  return reversedArray;
};
