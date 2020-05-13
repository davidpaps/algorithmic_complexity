class Graph {
  constructor() {
    this.timingSort = new Timing(sort);
    this.timingReverse = new Timing(reverse);
    this.data = [];
    this.labels = [];
  }

  renderChart = (labels, data) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "sort()",
            data: data[0],
          },
          // {
          //   label: "reverse()",
          //   data: dataReverse,
          // },
        ],
      },
    });
  };

  graphData = () => {
    this.generateLabels(100000, 1000);
    this.sortData(100000, 1000);
    this.renderChart(this.labels, this.data);
  };

  sortData = (inputSize, step) => {
    this.timingSort.run(inputSize, step);
    let sortData = [];
    this.timingSort.times.forEach((iteration) => {
      sortData.push(iteration.time);
    });
    this.data.push(sortData);
  };

  generateLabels = (inputSize, step) => {
    this.timingSort.run(inputSize, step);

    this.timingSort.times.forEach((iteration) => {
      this.labels.push(iteration.inputSize);
    });
  };
}
