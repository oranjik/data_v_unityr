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
          53.2,	60.7,	68.4,	70.6,	68.9,	65.8,	76.1,	74.4,	77.7,	72.4,	73.2,	70.3,	71.1,	66.9,	76.2,	79.3,
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
          11.5,	9.5,	8.5,	9.6,	9.2,	6.8,	5.1,	4.5,	3.7,	5.4,	8.8,	4.8,	5.4,	6.1,	4.8,	5.2,
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
          24.2,	20.4,	15.9,	14.9,	15.9,	20.6,	11,	9.7,	8.8,	11.1,	11.5,	20.8,	19.8,	18.1,	14.4,	10.6
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
          10.2,	7.9,	60.9,	4.21,	5.3,	5.9,	7.3,	10.4,	8.8,	10.6,	5.4,	4,	3.5,	7.9,	4,	4.4,
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
          0.9,	1.5,	1,	0.8,	0.8,	0.9,	0.5,	1,	1.1,	0.5,	1.2,	0.2,	0.2,	1,	0.7,	0.6
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
        text: ["주변국 친밀감","다음 국가들 중 어느 나라를 가장 가깝게 느끼십니까?"],
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