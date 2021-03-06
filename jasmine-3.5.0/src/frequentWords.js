"use strict";

class FrequentWords {
  constructor() {
    this.timingFrequentWords = new Timing(frequentWords);
    this.timingMyFrequentWords = new Timing(myFrequentWords);
    this.data = [];
    this.labels = [];
  }

  generateChart = (labels, data) => {
    let ctx = document.getElementById("frequent").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "JS frequent()",
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
            label: "My frequent()",
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
          text: "Comparison of Frequent Word Functions",
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
    this.frequentWordData(inputSize, step);
    this.myFrequentWordData(inputSize, step);
    this.generateChart(this.labels, this.data);
  };

  generateLabels = (inputSize, step) => {
    this.timingFrequentWords.runWords(inputSize, step);

    this.timingFrequentWords.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };

  frequentWordData = (inputSize, step) => {
    this.timingFrequentWords.runWords(inputSize, step);
    let frequentWordData = [];
    this.timingFrequentWords.times.forEach((iteration) => {
      frequentWordData.push(iteration.time);
    });
    this.data.push(frequentWordData);
  };

  myFrequentWordData = (inputSize, step) => {
    this.timingMyFrequentWords.runWords(inputSize, step);
    let myFrequentWordData = [];
    this.timingMyFrequentWords.times.forEach((iteration) => {
      myFrequentWordData.push(iteration.time);
    });
    this.data.push(myFrequentWordData);
  };
}

const frequentWords = (array) => {
  let duplicates = array.filter(
    (item, index) => array.lastIndexOf(item) != index
  );
  return [...new Set(duplicates)];
};

const myFrequentWords = (array) => {
  let counting = {};

  array.forEach(function (string) {
    counting[string] = (counting[string] || 0) + 1;
  });

  if (Object.keys(counting).length !== array.length) {
    let duplicates = [];
    let string;
    for (string in counting) {
      if (counting.hasOwnProperty(string)) {
        if (counting[string] > 1) {
          duplicates.push(string);
        }
      }
    }
    return duplicates;
  }
};
