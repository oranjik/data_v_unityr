const borderColors = ["#BD2D5C", "#DE5727", "#F19639", "#7C4FA9", "#40259F"]
const borderColorsRGB = [[189,45,92], [222,87,39], [241,150,57], [124,79,169],[64,37,159]]

let curIndex = -1;

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDataLabels],
  data: {
    labels: Array.from({ length: 16 }, (_, i) => i + 2007),
    datasets: [
      {
        label: "매우 필요하다",
        data: [
          34.42, 26.13, 24.69, 27.25, 28.81, 26.75, 23.58, 26.92, 21.58, 21.0,
          18.0, 21.92, 20.5, 20.92, 13.83, 14.75,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#BD2D5C",
        borderWidth: 2,
        tension: 0,
        // hoverBorderColor: function(context) {
        //   return context.active? context.borderColor : 'gray';
        // },
        },
      {
        label: "약간 필요하다",
        data: [
          29.42, 25.39, 31.17, 31.75, 24.9, 30.25, 31.25, 28.92, 30.42, 32.67,
          36.08, 37.83, 33.08, 31.92, 30.75, 31.08,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#DE5727",
        borderWidth: 2,
        tension: 0,
      },
      {
        label: "반반/보통이다",
        data: [
          21.08, 23.08, 23.61, 20.42, 24.98, 21.58, 21.5, 22.5, 24.5, 22.5,
          24.5, 24.17, 26.42, 22.5, 26.0, 28.08,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#F19639",
        borderWidth: 2,
        tension: 0,
      },
      {
        label: "별로 필요하지 않다",
        data: [
          12.67, 19.95, 16.13, 16.58, 16.82, 17.17, 18.5, 18.08, 17.75, 18.25,
          17.33, 13.5, 15.33, 19.75, 24.58, 20.75,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#7C4FA9",
        borderWidth: 2,
        tension: 0,
      },
      {
        label: "전혀 필요하지 않다",
        data: [
          2.42, 5.44, 4.41, 4.0, 4.5, 4.25, 5.17, 3.58, 5.75, 5.58, 4.08, 2.58,
          4.67, 4.92, 4.83, 5.33,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#40259F",
        borderWidth: 2,
        tension: 0,

      },
    ],
  },
  options: {
    onHover: (e, chartElement) => {
      e.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        const activeDataset = myChart.getActiveElements()
        if (activeDataset.length) {
          myChart.data.datasets.forEach((dataset, index) => {
            if (index == activeDataset[0].datasetIndex) {
              curIndex = index;
            } else {
              myChart.data.datasets[index].borderColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
            }
          })
        } else {
          myChart.data.datasets.forEach((dataset, index) => {
              myChart.data.datasets[index].borderColor = borderColors[index];
          })
          curIndex = -1;
        }
        myChart.update('none')
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      
      datalabels: {
        color: 'white',
        font : {
          size : 12
        },
        textAlign: 'center',
        display: function(context) {
          console.log(context.datasetIndex);
          return context.datasetIndex === curIndex
        },
      },
      legend: {
        display: true,
        
        position: "right",
        align: "start",
        labels: {
          padding: 40,
          color: 'white',
          font: {
            size: 14
          },
        }
      },
      
    },
    hover: {
      mode: 'dataset',
      intersect: true,
      animationDuration: 0,
    },
    scales: {
      y:
        {
          ticks: {
            beginAtZero: true,
            fontSize: 24,
            font: {
              size: 14
            },
            color: 'white',
          },
        },
      x:
        {
          ticks: {
            autoSkip: false,
            fontSize: 24,
            maxRotation: 90,
            minRotation: 90,
            font: {
              size: 14
            },
            color: 'white',
          },
        },
    },
    
  },
});
