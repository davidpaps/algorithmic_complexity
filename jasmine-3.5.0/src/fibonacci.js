"use strict";

class Fibonacci {
  constructor() {
    this.timingFibonacci = new Timing(fibonacci);
    this.timingMyFibonacci = new Timing(myFibonacci);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("fibonacci").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS fibonacci()",
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
            label: "My fibonacci()",
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
          text: "Comparison of Fibonacci Functions",
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
                labelString: "Number of Fibonacci Numbers",
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
    this.fibonacciData(inputSize, step);
    this.myFibonacciData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingFibonacci.runFibonacci(inputSize, step);

    this.timingFibonacci.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  fibonacciData = (inputSize, step) => {
    this.timingFibonacci.runFibonacci(inputSize, step);
    let fibonacciData = [];
    this.timingFibonacci.times.forEach((iteration) => {
      fibonacciData.push(iteration.time);
    });
    this.data.push(fibonacciData);
  };

  myFibonacciData = (inputSize, step) => {
    this.timingMyFibonacci.runFibonacci(inputSize, step);
    let myFibonacciData = [];
    this.timingMyFibonacci.times.forEach((iteration) => {
      myFibonacciData.push(iteration.time);
    });
    this.data.push(myFibonacciData);
  };
}

const fibonacci = (number) => {
  let fibonacciArray = [0, 1];
  for (let i = 2; i < number; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  return fibonacciArray;
};

const myFibonacci = (number) => {
  let a = 0;
  let b = 1;
  let fibonacciArray = [];

  if (number >= 1) {
    fibonacciArray.push(a);
  }
  if (number >= 2) {
    fibonacciArray.push(b);
  }
  if (number >= 3) {
    for (let i = 0; i < number - 2; i++) {
      let c = a + b;
      a = b;
      b = c;
      fibonacciArray.push(c);
    }
  }
  return fibonacciArray;
};
