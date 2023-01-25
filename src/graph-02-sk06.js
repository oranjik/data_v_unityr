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
        label: "위협적이다",
        data: [
          89.6,	91,	83.8,	86.5,	89.9,	89.1,	82.6,	89.4,	86.7,	84.6
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#B72B5B",
        borderWidth: 1,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: '#B72B5B',
        pointBorderColor: '#B72B5B',
        hoverBorderColor: function(context) {
          return context.active? context.borderColor : 'gray';
        },
        },
      {
        label: "위협적이지 않다",
        data: [
          10.4,	9.1,	16.2,	13.5,	10.1,	11,	17.4,	10.6,	13.4,	15.4
        
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#F08F37",
        pointStyle: 'rect',
        backgroundColor: '#F08F37',
        pointBorderColor: '#F08F37',
        borderWidth: 1,
        tension: 0,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: ["핵무기 위협", "귀하는 북한에 살고 계실 때 북한의 핵무기가 남한에", "얼마나 위협적일 것이라고 생각하셨습니까?"],
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