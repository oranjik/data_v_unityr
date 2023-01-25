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
    labels: Array.from({ length: 10 }, (_, i) => i + 2011),
    datasets: [
      {
        label: "낮음",
        data: [
          35.1,	23.8,	34.6,	27,	38.1,	32.1,	28, 22.4,	21,	29.8
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#4162F6",
        borderWidth: 1,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: '#4162F6',
        pointBorderColor: '#4162F6',
        hoverBorderColor: function(context) {
          return context.active? context.borderColor : 'gray';
        },
        },
      {
        label: "보통",
        data: [
          34,	32.8,	33.8,	34.8,	38.1,	31.4,	34.8,	27.1,	31,	31.7
        
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#F08F37",
        pointStyle: 'rect',
        backgroundColor: '#F08F37',
        pointBorderColor: '#F08F37',
        borderWidth: 1,
        tension: 0,
      },
      {
        label: "높음",
        data: [
          29.9,	42.6,	31.5,	38.3,	23.7,	36.5,	36.4,	50.6,	38.1,	38.5
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
        text: ["김정은 지지도", "귀하는 북한에 살고 계실 때 김정은 위원장에 대한", "북한 주민들의 지지도가 어느 정도라고 생각하셨습니까?"],
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