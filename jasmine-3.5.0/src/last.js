"use strict";

class Last {
  constructor() {
    this.timingLast = new Timing(last);
    this.timingMyLast = new Timing(myLast);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("last").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS last()",
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
            label: "My last()",
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
          text: "Comparison of Last Functions",
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
    this.lastData(inputSize, step);
    this.myLastData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingLast.runNumbers(inputSize, step);

    this.timingLast.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  lastData = (inputSize, step) => {
    this.timingLast.runNumbers(inputSize, step);
    let lastData = [];
    this.timingLast.times.forEach((iteration) => {
      lastData.push(iteration.time);
    });
    this.data.push(lastData);
  };

  myLastData = (inputSize, step) => {
    this.timingMyLast.runNumbers(inputSize, step);
    let myLastData = [];
    this.timingMyLast.times.forEach((iteration) => {
      myLastData.push(iteration.time);
    });
    this.data.push(myLastData);
  };
}

const last = (array) => {
  return array.slice(-1)[0];
};

const myLast = (array) => {
  return array[array.length - 1];
};
