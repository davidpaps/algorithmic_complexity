"use strict";

class Graph {
  constructor() {
    this.timingSort = new Timing(sort);
    this.timingReverse = new Timing(reverse);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "sort()",
            data: data[0],
            fill: false,
            hidden: true,
            backgroundColor: "#990000",
            borderColor: "#990000",
            borderWidth: 2,
            pointBackgroundColor: "#990000",
            pointBorderColor: "#000000",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 3,
            pointHitRadius: 4,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#990000",
          },
          {
            label: "reverse()",
            data: data[1],
            fill: false,
            hidden: true,
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
          text: "Comparison of Algorithm Complexity",
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
    this.reverseData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingSort.run(inputSize, step);

    this.timingSort.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  sortData = (inputSize, step) => {
    this.timingSort.run(inputSize, step);
    let sortData = [];
    this.timingSort.times.forEach((iteration) => {
      sortData.push(iteration.time);
    });
    this.data.push(sortData);
  };

  reverseData = (inputSize, step) => {
    this.timingReverse.run(inputSize, step);
    let reverseData = [];
    this.timingReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time);
    });
    this.data.push(reverseData);
  };
}
