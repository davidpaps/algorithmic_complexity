"use strict";

class Shuffle {
  constructor() {
    this.timingShuffle = new Timing(shuffle);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("shuffle").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS shuffle()",
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
            label: "My shuffle()",
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
    this.shuffleData(inputSize, step);
    this.myShuffleData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingShuffle.run(inputSize, step);

    this.timingShuffle.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  shuffleData = (inputSize, step) => {
    this.timingShuffle.run(inputSize, step);
    let shuffleData = [];
    this.timingShuffle.times.forEach((iteration) => {
      shuffleData.push(iteration.time);
    });
    this.data.push(shuffleData);
  };

  myShuffleData = (inputSize, step) => {
    this.timingShuffle.run(inputSize, step);
    let myShuffleData = [];
    this.timingShuffle.times.forEach((iteration) => {
      myShuffleData.push(iteration.time);
    });
    this.data.push(myShuffleData);
  };
}
