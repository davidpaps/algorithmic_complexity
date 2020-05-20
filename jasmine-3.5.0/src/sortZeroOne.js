"use strict";

class SortZeroOne {
  constructor() {
    this.timingSortZeroOne = new Timing(sortZeroOne);
    this.timingMySortZeroOne = new Timing(mySortZeroOne);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("sortZeroOne").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "sortZeroOne()",
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
            label: "My sortZeroOne()",
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
          text: "Comparison of Sort Zero/One Functions",
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
                labelString: "Number of elements in Array",
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
    this.sortZeroOneData(inputSize, step);
    this.mySortZeroOneData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingSortZeroOne.runZeroOne(inputSize, step);

    this.timingSortZeroOne.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  sortZeroOneData = (inputSize, step) => {
    this.timingSortZeroOne.runZeroOne(inputSize, step);
    let sortZeroOneData = [];
    this.timingSortZeroOne.times.forEach((iteration) => {
      sortZeroOneData.push(iteration.time);
    });
    this.data.push(sortZeroOneData);
  };

  mySortZeroOneData = (inputSize, step) => {
    this.timingMySortZeroOne.runZeroOne(inputSize, step);
    let mySortZeroOneData = [];
    this.timingMySortZeroOne.times.forEach((iteration) => {
      mySortZeroOneData.push(iteration.time);
    });
    this.data.push(mySortZeroOneData);
  };
}

const sortZeroOne = (array) => {
  return array;
};

const mySortZeroOne = (array) => {
  return array;
};
