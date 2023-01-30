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
        label: "같은 민족이니까",
        data: [
          50.7,	58.5,	44.3,	43.3,	41.9,	46,	40.4,	42.6,	42,	38.9,	40.4,	45.1,	35.2,	37.3,	45.7,	42.3,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#3E5FFF",
        borderWidth: 3,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: '#3E5FFF',
        pointBorderColor: '#3E5FFF',
        hoverBorderColor: function(context) {
          return context.active? context.borderColor : 'gray';
        },
        },
      {
        label: "이산가족의 고통을 해결해 주기 위해",
        data: [
          8.9,	6.6,	8.6,	7,	7.1,	9.1,	8.4,	8.9,	11.4,	12.2,	10.3,	6.9,	10,	7.4,	11.3,	10.7,
        
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#FF8A0A",
        pointStyle: 'rect',
        backgroundColor: '#FF8A0A',
        pointBorderColor: '#FF8A0A',
        borderWidth: 3,
        tension: 0,
      },
      {
        label: "남북 간에 전쟁위협을 없애기 위해",
        data: [
          19.2,	14.6,	23.4,	24.2,	27.4,	25.2,	30.8,	26.8,	25.7,	29.2,	32.4,	31.4,	32.5,	37.9,	28.2,	31.6,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#E94B03",
        pointStyle: 'rect',
        backgroundColor: '#E94B03',
        pointBorderColor: '#E94B03',
        borderWidth: 3,
        tension: 0,
      },
      {
        label: "북한주민도 잘 살 수 있도록",
        data: [
          1.8,	2.9,	4.2,	4,	4.8,	4.4,	5.5,	3.8,	6.2,	4.8,	4,	3.4,	3.1,	2,	3.5, 4.6,
        ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#B72B5B",
        pointStyle: 'rect',
        backgroundColor: '#B72B5B',
        pointBorderColor: '#B72B5B',
        borderWidth: 3,
        tension: 0,
      },
      {
        label: "한국이 보다 선진국이 되기 위해서",
        data: [
          18.7,	17.3,	18.6,	20.8,	17.8,	14.5,	14.2,	17.5,	14.1,	14.2,	13,	12.9,	18.8,	15.3,	11.4,	10.7,
          ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#784EA3",
        pointStyle: 'rect',
        backgroundColor: '#784EA3',
        pointBorderColor: '#784EA3',
        borderWidth: 3,
        tension: 0,

      },
      {
        label: "기타",
        data: [
          0.7,	0.1,	0.8,	5.9,	1.1,	0.8,	0.8, 0.4,	0.5,	0.7,	0.1,	0.2,	0.4,	0.3,	0,	0.1,
          ],
        backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#81FA86",
        pointStyle: 'rect',
        backgroundColor: '#81FA86',
        pointBorderColor: '#81FA86',
        borderWidth: 3,
        tension: 0,

      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: ["통일 이유", "우리나라가 통일이 되어야 하는 가장 큰 이유가 다음 중", "무엇이라고 생각하십니까?"],
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