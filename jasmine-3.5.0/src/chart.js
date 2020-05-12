class Graph {
  constructor() {
    this.timingSort = new Timing(sort);
  }

  renderChart = (data, labels) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "sort()",
            data: data,
          },
        ],
      },
    });
  };

  graphData = () => {
    this.timingSort.run(100000, 1000);
    let labelSort = [];
    let dataSort = [];

    this.timingSort.times.forEach((iteration) => {
      labelSort.push(iteration.inputSize);
    });

    this.timingSort.times.forEach((iteration) => {
      dataSort.push(iteration.time);
    });

    this.renderChart(dataSort, labelSort);
  };
}
