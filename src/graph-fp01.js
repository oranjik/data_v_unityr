const borderColors = ["#3E5FFF", "#40FF76", "#E94B03", "#FF006E", "#804AA8"]
const borderColorsRGB = [[62,95,255], [64,255,118], [233,75,3], [255,0,110],[128,74,168]]
const imageSource = ['./img/usa.png', './img/japan.png','./img/n_korea.png','./img/china.png','./img/russia.png']

let curIndex = -1;
const ctx = document.getElementById("myChart");

const plugin = {
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    const {top, left, width, height, right, bottom} = chart.chartArea;
    const x = left;
    const y = top;
    const image = new Image();
    if(curIndex >=0){
      image.src = imageSource[curIndex];
      const imageWidth = right - left;
      const imageHeight = bottom - top;
      ctx.drawImage(image, x, y, imageWidth, imageHeight);
      // image.onload = () => myChart.update();
    }
  },
}

const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDataLabels, plugin],
  data: {
    labels: Array.from({ length: 10 }, (_, i) => i + 2013),
    datasets: [
      {
        label: "미국",
        data: [
          53.2,	60.7,	68.4,	70.6,	68.9,	65.8,	76.1,	74.4,	77.7,	72.4,	73.2,	70.3,	71.1,	66.9,	76.2,	79.3,
        ],
        borderColor: "#3E5FFF",
        borderWidth: 3,
        tension: 0,
        pointStyle: 'rect',
        backgroundColor: "#3E5FFF",
        pointBorderColor: "#3E5FFF",
        pointRadius: 4,
        },
      {
        label: "일본",
        data: [
          11.5,	9.5,	8.5,	9.6,	9.2,	6.8,	5.1,	4.5,	3.7,	5.4,	8.8,	4.8,	5.4,	6.1,	4.8,	5.2,
        ],
        borderColor: "#40FF76",
        pointStyle: 'cross',
        backgroundColor: '#40FF76',
        pointBorderColor: '#40FF76',
        borderWidth: 3,
        tension: 0,
        pointRadius: 4,
      },
      {
        label: "북한",
        data: [
          24.2,	20.4,	15.9,	14.9,	15.9,	20.6,	11,	9.7,	8.8,	11.1,	11.5,	20.8,	19.8,	18.1,	14.4,	10.6
        ],
        borderColor: "#E94B03",
        pointStyle: 'circle',
        backgroundColor: '#E94B03',
        pointBorderColor: '#E94B03',
        borderWidth: 3,
        tension: 0,
        pointRadius: 3,
      },
      {
        label: "중국",
        data: [
          10.2,	7.9,	60.9,	4.21,	5.3,	5.9,	7.3,	10.4,	8.8,	10.6,	5.4,	4,	3.5,	7.9,	4,	4.4,
        ],
        // backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: "#FF006E",
        pointStyle: 'rectRot',
        backgroundColor: '#FF006E',
        pointBorderColor: '#FF006E',
        borderWidth: 3,
        tension: 0,
        pointRadius: 4,
      },
      {
        label: "러시아",
        data: [
          0.9,	1.5,	1,	0.8,	0.8,	0.9,	0.5,	1,	1.1,	0.5,	1.2,	0.2,	0.2,	1,	0.7,	0.6
        ],
        borderColor: "#804AA8",
        pointStyle: 'triangle',
        backgroundColor: '#804AA8',
        pointBorderColor: '#804AA8',
        borderWidth: 3,
        tension: 0,
        pointRadius: 4,
      },
    ],
  },
  options: {
    aspectRatio: 1.2,
    responsive: false,
    // maintainAspectRatio: false,
    onHover: (e, chartElement) => {
      e.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        const activeDataset = myChart.getActiveElements()
        if (activeDataset.length) {
          myChart.data.datasets.forEach((dataset, index) => {
            if (index == activeDataset[0].datasetIndex) {
              curIndex = index;
            } else {
              myChart.data.datasets[index].pointBorderColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
              myChart.data.datasets[index].backgroundColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
              myChart.data.datasets[index].borderColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
            }
          })
          
        } else {
          myChart.data.datasets.forEach((dataset, index) => {
              myChart.data.datasets[index].borderColor = borderColors[index];
              myChart.data.datasets[index].backgroundColor = borderColors[index];
              myChart.data.datasets[index].pointBorderColor = borderColors[index];
          })
          curIndex = -1;
        }
        myChart.update();
    },
    
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
        font : {
          size : 12
        },
        textAlign: 'center',
        display: function(context) {
          return context.datasetIndex === curIndex
        },
      },
      legend: {
        display: true,
        
        position: "right",
        align: "center",
        labels: {
          boxHeight: 0,
          padding: 40,
          color: 'white',
          pointStyleWidth	: true,
          font: {
            size: 16
          },
        }
      },
      scales:{
        ticks:{
          display: true,
        }
      },
    },
    scales: {
      y:
        {
          grid:{
            color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),

          },
          ticks: {
            beginAtZero: true,
            fontSize: 24,
            font: {
              size: 14,
            },
            color: 'white',
          },
        },
      x:
        {
          grid:{
            color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
            display: false,
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