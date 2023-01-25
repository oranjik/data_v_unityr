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
    labels: Array.from({ length: 16 }, (_, i) => i + 2009),
    datasets: [
      {
        label: "만족",
        data: [
          30.3,	34.3,	31.8,	86.3,	40.1,	34.4,	57.6,	53.6,	49.2,	44.6,	59.1,	65.6,	55.9,	37.7,	35,	45.6
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#81FA86",
        borderWidth: 1,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: '#81FA86',
        pointBorderColor: '#81FA86',
        hoverBorderColor: function(context) {
          return context.active? context.borderColor : 'gray';
        },
        },
      {
        label: "불만족",
        data: [
          69.7,	65.7,	18.1,	14.2,	60, 65.6,	42.4,	46.4,	50.8,	55.4,	40.9,	34.4,	44.1,	62.2,	65,	54.3
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
        text: ["대북정책 만족도", "현 정부의 대북정책에 대해 얼마나 만족하십니까?"],
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
            color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
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
          grid:{
            color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
          },
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