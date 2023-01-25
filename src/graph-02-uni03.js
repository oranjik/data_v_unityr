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
        label: "같은 민족이니까",
        data: [
          23.4,	28.8,	30.7,	37.1,	42.4, 28.6,	47.1
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
        label: "이산가족의 고통을 해결해 주기 위해",
        data: [
          7.1,	3.6,	8.8,	8.3,	4.7,	7.6,	5.8,
        
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
        label: "남북 간에 전쟁위협을 없애기 위해",
        data: [
          12.1,	8.6,	12.4,	9.9,	14.1,	6.7,	4.8,
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
        label: "북한주민이 잘 살 수 있도록",
        data: [
          48.9,	47.5, 41.6,	29.5,	30.6,	49.5,	26,
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
        label: "북한이 보다 선진국이 되기 위해서",
        data: [
          7.8,	10.1,	4.4,	12.1,	5.9,	4.8,	11.5
          ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#784EA3",
        pointStyle: 'rect',
        backgroundColor: '#784EA3',
        pointBorderColor: '#784EA3',
        borderWidth: 1,
        tension: 0,

      },
      {
        label: "기타",
        data: [
          0.7,	1.4,	2.2,	3,	2.4,	2.9,	4.8,
          ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#81FA86",
        pointStyle: 'rect',
        backgroundColor: '#81FA86',
        pointBorderColor: '#81FA86',
        borderWidth: 1,
        tension: 0,

      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: ["통일 이유", "귀하는 북한에 살고 계실 때 통일이 되어야 하는 가장","큰 이유가 다음 중 무엇이라고 생각하십니까?"],
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