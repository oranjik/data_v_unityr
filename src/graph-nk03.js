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
    labels: Array.from({ length: 14 }, (_, i) => i + 2009),
    datasets: [
      {
        label: "가능하다",
        data: [
          41,	35,	34.3,	39.3,	35.8,	28.3,	29,	32,	28.8,	55.6,	52,	34.7,	33,	33.7,
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
        label: "불가능하다",
        data: [
          59,	65,	65.7,	60.7,	64.2,	71.8,	71,	68,	71.2,	44.4,	48,	65.4,	67,	66.3,
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
        text: ["북한 대화 가능성", "통일을 함께 논의할 대상으로 북한 정권이 대화와", "타협이 가능한 상대라고 생각하십니까?"],
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