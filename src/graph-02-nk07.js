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
    labels: Array.from({ length: 7 }, (_, i) => i + 2014),
    datasets: [
      {
        label: "찬성",
        data: [
          46.8,	51.8,	50.4,	53.8,	57.6,	49.5,	44.2
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
        label: "반반/보통",
        data: [
          23.4,	28.1,	19, 28.8,	27.1,	26.7,	40.4
        
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
        label: "반대",
        data: [
          29.8,	20.1,	30.7, 17.4,	15.3,	23.8,	15.4
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
        text: ["핵무기 보유견해", "귀하는 북한에 살고 계실 때, ", "'북한은 핵무기를 가져야 한다'라는 견해에 어떻게 생각하셨습니까?"],
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