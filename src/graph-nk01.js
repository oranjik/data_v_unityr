// const hoverValue = {
//   id: 'hoverValue',
//   afterDatasetsDraw(chart, args, pluginOptions) {
//     const { ctx, data, options } = chart;

//     console.log(chart.getActiveElements());
//     chart.getActiveElements().forEach((active) => {
//       console.log(active.dataset)
//     })
//   }
// }

const ctx = document.getElementById("myChart");

const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDataLabels],
  data: {
    labels: Array.from({ length: 16 }, (_, i) => i + 2007),
    datasets: [
      {
        label: "지원과 협력의 대상",
        data: [
          78.5,	79.3,	68.5,	64.3,	63.9,	63,	56.8,	59.3,	54.2,	55.2,	55.7,	71.8,	67.9,	60.6,	60.2,	63,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#F08F37",
        borderWidth: 1,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: '#F08F37',
        pointBorderColor: '#F08F37',
        hoverBorderColor: function(context) {
          return context.active? context.borderColor : 'gray';
        },
        },
      {
        label: "선의의 경쟁 대상",
        data: [
          3.3,	3.6,	2.2,	3.3,	2.3,	4.9,	5.6,	4.5,	7.6,	8,	6.3,	4.3,	4.9,	4,	6.5,	5.3,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#D85627",
        pointStyle: 'rect',
        backgroundColor: '#D85627',
        pointBorderColor: '#D85627',
        borderWidth: 1,
        tension: 0,
      },
      {
        label: "경계대상 및 안전위협대상",
        data: [
          18.2,	17.1,	29.3,	32.4,	33.8,	32.1,	37.6,	36.2,	38.1,	36.8,	38,	23.9,	27.2,	35.4,	33.3,	31.7
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#B72B5B",
        pointStyle: 'rect',
        backgroundColor: '#B72B5B',
        pointBorderColor: '#B72B5B',
        borderWidth: 1,
        tension: 0,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: ["Nk01)", "북한에 대한 인식", "북한이 우리에게 어떤 대상이라고 생각하십니까?"],
        color: "white",
        font:{
          size: 20,
        },
        align: 'start',
        padding:{
          bottom: 60,
        }
      },
      tooltip: {
        enabled: false,
      },
      
      datalabels: {
        color: 'white',
        font :{
          size: 12
        },
        textAlign: 'center',
        display: function(context) {
          return context.active? true : false;
        },
      },
      legend: {
        display: true,
        
        position: "right",
        align: "start",
        labels: {
          boxHeight: 0,
          padding: 40,
          color: 'white',
          font: {
            size: 14
          },
        }
      },
      scales:{
        ticks:{
          display: true,
        }
      }
      
    },
    hover: {
      mode: 'dataset',
      intersect: true,
      animationDuration: 10,
    },
    scales: {
      y:
        {
          grid:{
            drawTicks: true,
            lineWidth: 1,
          },
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