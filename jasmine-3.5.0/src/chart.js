class Graph {
  constructor() {
    this.timingSort = new Timing(sort);
    this.timingReverse = new Timing(reverse);
  }

  renderChart = (labels, dataSort, dataReverse) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "sort()",
            data: dataSort,
          },
          {
            label: "reverse()",
            data: dataReverse,
          },
        ],
      },
    });
  };

  graphData = () => {
    this.timingSort.run(100000, 1000);
    let labels = [];
    let dataSort = [];

    this.timingSort.times.forEach((iteration) => {
      labels.push(iteration.inputSize);
    });

    this.timingSort.times.forEach((iteration) => {
      dataSort.push(iteration.time);
    });

    this.timingReverse.run(100000, 1000);
    let dataReverse = [];

    this.timingReverse.times.forEach((iteration) => {
      dataReverse.push(iteration.time);
    });

    this.renderChart(labels, dataSort, dataReverse);
  };
}
