const borderColors = ["#BD2D5C", "#DE5727", "#F19639", "#7C4FA9", "#40259F"]
const borderColorsRGB = [[189,45,92], [222,87,39], [241,150,57], [124,79,169],[64,37,159]]

let curIndex = -1;

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "bar",
  plugins: [ChartDataLabels],
  data: {
    labels: Array.from({ length: 16 }, (_, i) => i + 2007),
    datasets: [
      {
        label: "필요하다",
        data: [
          64.1,	51.6,	56.4,	59.3,	23.8,	24,	54.9,	55.9,	52,	53.7,	54,	59.7,	53.6,	52.9,	44.6,	46
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
        label: "반반/보통",
        data: [
          20.9,	23.2,	23.5,	20.4,	25.1,	21.6,	21.5,	22.6,	24.6,	22.5,	24.5,	24.2,	26.4,	22.4,	26,	27.9
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        color: "#DE5727",
        borderWidth: 2,
        tension: 0,
      },
      {
        label: "필요하지 않다",
        data: [
          15,	25.2,	20.1,	20.4,	21.1,	21.4,	23.6,	21.6,	23.4,	23.8,	21.5,	16.1,	20,	24.7,	29.4,	26.1
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#F19639",
        borderWidth: 2,
        tension: 0,
      },
    ],
  },
  options: {
    indexAxis: 'y',
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
          stacked: true,
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

// function clickHandler(evt) {
//   const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

//   console.log(points)

//   if (points.length) {
//       const firstPoint = points[0];
//       const label = myChart.data.labels[firstPoint.index];
//       const value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
//   }
// }

// ctx.onmouseover = clickHandler

// function hoverHandler(mousemove) {
//   const points = myChart.getElementsAtEventForMode(mousemove, 'nearest', { intersect: true }, true);

//   if (points.length) {
//     const dataset = points[0]._datasetIndex;
//     const datapoint = points[0]._index;
//     const value = myChart.data.datasets[dataset];
//     value.data.forEach(function(index, data) {
//       // console.log(index, data)
//     })
//   }
// }

// ctx.onmousemove = hoverHandler;