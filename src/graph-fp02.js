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
    labels: Array.from({ length: 10 }, (_, i) => i + 2013),
    datasets: [
      {
        label: "미국",
        data: [
          21.2,	16,12.7,	8.2,	8.6,	9.5,	4.4,	5.3,	4.8,	5,	0.5,	5.4,	5.9,	8.3,	4.3,	3.2
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
          25.8,	34.1,	17.4,	10.4,	11.6,	12.2,	15.9,	25.1,	15.7,	11,	7.8,	13.9,	28.2,	18.5,	11.5,	7.7
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
        label: "북한",
        data: [
          36.1,	34.2,	53,	55.7,	45.8,	47.5,	57,	49.6,	55,	64.9, 62.5,	32.4,	30.6,	40.8,	38.5,	36.1
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
        label: "중국",
        data: [
          15.5,	14.6,	15.8,	24.5,	33.7,	30.4,	21.4,	17.8,	23.3,	17.5,	23,	46.2,	34.2,	31.6,	44.7,	43.8,
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
          1.2,	1.1,	1.2,	0.3,	0.4,	1.3,	2.2,	1.3,	1.6,	1.8,	2,	0.1,	0.8,	0.9,	9.2
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
        text: ["평화위협국가","다음 국가들 중에서 어느 나라가 한반도의 평화에 가장 위협적인 나라라고 생각하십니까?"],
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