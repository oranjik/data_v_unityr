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
    labels: Array.from({ length: 9 }, (_, i) => i + 2012),
    datasets: [
      {
        label: "미국",
        data: [
          1.6,	1.5,	1.4,	2.2,	0,	0,	2.4,	1,	1.9
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
        label: "일본",
        data: [
          0.8,	0,	0,	0,	0.7,	0,	4.7,	1,	1
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#81FA86",
        pointStyle: 'rect',
        backgroundColor: '#81FA86',
        pointBorderColor: '#81FA86',
        borderWidth: 1,
        tension: 0,
      },
      {
        label: "남한",
        data: [
          22.1,	13.1,	16.3,	21.6,	16.1,	22.7,	12.9,	22.9,	20.2
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
        label: "중국",
        data: [
          72.1,	83.1,	79.4,	74.8,	76.6,	71.2,	67.1,	69.5,	65.4
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#B72B5B",
        pointStyle: 'rect',
        backgroundColor: '#B72B5B',
        pointBorderColor: '#B72B5B',
        borderWidth: 1,
        tension: 0,
      },
      {
        label: "러시아",
        data: [
          3.3,	2.3,	2.8,	1.4,	6.6,	6.1,	12.9,	5.7,	11.5
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#784EA3",
        pointStyle: 'rect',
        backgroundColor: '#784EA3',
        pointBorderColor: '#784EA3',
        borderWidth: 1,
        tension: 0,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: ["주변국 친밀감","귀하는 북한에 살고 계실 때 다음 국가들 중 어느 나라를 가장 가깝게 느끼셨습니까?"],
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