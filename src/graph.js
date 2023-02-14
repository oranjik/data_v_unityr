const totalBorderColors = ["#3E5FFF", "#40FF76", "#E94B03", "#FF006E", "#804AA8", "#FF8A0A"]
const totalBorderColorsRGB = [[62,95,255], [64,255,118], [233,75,3], [255,0,110],[128,74,168],[255,138,10]]
const totalPointStyle = ['rect', 'cross', 'circle', 'rectRot', 'triangle', 'square']
const imageSource = ['./img/usa.png', './img/japan.png','./img/n_korea.png','./img/china.png','./img/russia.png']

let curIndex = -1;
const ctx = document.getElementById("myChart");
const borderWidth = 3;
const pointRadius = 4;


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

const deleteChart = () => {
  if(Chart.getChart("myChart")){
    const prevChart = Chart.getChart("myChart");
    prevChart.destroy();
  }
};


function fnChart1Uni01() {
  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Uni01";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[2]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "필요하다",
          data: [
            64.1,	51.6,	56.4,	59.3,	23.8,	24,	54.9,	55.9,	52,	53.7,	54,	59.7,	53.6,	52.9,	44.6,	46,
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          },
        {
          label: "반반/보통",
          data: [
            20.9,	23.2,	23.5,	20.4,	25.1,	21.6,	21.5,	22.6,	24.6,	22.5,	24.5,	24.2,	26.4,	22.4,	26,	27.9,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "필요하지 않다",
          data: [
            15,	25.2,	20.1,	20.4,	21.1,	21.4,	23.6,	21.6,	23.4,	23.8,	21.5,	16.1,	20,	24.7,	29.4,	26.1,
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["통일 필요성", "남북한 통일이 얼마나 필요하다고 생각하십니까?"],
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
            return context.datasetIndex === curIndex
          },
        },
        legend: {
          display: true,
          maxWidth: 300,
          position: "right",
          align: "center",
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
          },
        }
        
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
}

function fnChart1Uni06() {  
  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Uni06";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4],totalBorderColors[1]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColors[3],totalBorderColors[4],totalBorderColors[1]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4], totalPointStyle[1]];

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
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          },
        {
          label: ["이산가족의 고통을", "해결해 주기 위해"],
          data: [
            8.9,	6.6,	8.6,	7,	7.1,	9.1,	8.4,	8.9,	11.4,	12.2,	10.3,	6.9,	10,	7.4,	11.3,	10.7,
          
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: ["남북 간에 전쟁위협을", "없애기 위해"],
          data: [
            19.2,	14.6,	23.4,	24.2,	27.4,	25.2,	30.8,	26.8,	25.7,	29.2,	32.4,	31.4,	32.5,	37.9,	28.2,	31.6,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: ["북한주민도 잘 살 수", "있도록"],
          data: [
            1.8,	2.9,	4.2,	4,	4.8,	4.4,	5.5,	3.8,	6.2,	4.8,	4,	3.4,	3.1,	2,	3.5, 4.6,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: ["한국이 보다 선진국이", "되기 위해서"],
          data: [
            18.7,	17.3,	18.6,	20.8,	17.8,	14.5,	14.2,	17.5,	14.1,	14.2,	13,	12.9,	18.8,	15.3,	11.4,	10.7,
            ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
  
        },
        {
          label: "기타",
          data: [
            0.7,	0.1,	0.8,	5.9,	1.1,	0.8,	0.8, 0.4,	0.5,	0.7,	0.1,	0.2,	0.4,	0.3,	0,	0.1,
            ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
  
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["통일 이유", "우리나라가 통일이 되어야 하는 가장 큰 이유가 다음 중", "무엇이라고 생각하십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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
            return context.datasetIndex === curIndex
          },
        },
        legend: {
          display: true,
          maxWidth: 200,
          position: "right",
          align: "center",
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
}

function fnChart1Nk01() {

  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nk01";  
  const borderColors = [totalBorderColors[5], totalBorderColors[2],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[5], totalPointStyle[2], totalPointStyle[3]];


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "지원과 협력의 대상",
          data: [
            78.5,	79.3,	68.5,	64.3,	63.9,	63,	56.8,	59.3,	54.2,	55.2,	55.7,	71.8,	67.9,	60.6,	60.2,	63,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "선의의 경쟁 대상",
          data: [
            3.3,	3.6,	2.2,	3.3,	2.3,	4.9,	5.6,	4.5,	7.6,	8,	6.3,	4.3,	4.9,	4,	6.5,	5.3,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: ["경계대상 및", "안전위협대상"],
          data: [
            18.2,	17.1,	29.3,	32.4,	33.8,	32.1,	37.6,	36.2,	38.1,	36.8,	38,	23.9,	27.2,	35.4,	33.3,	31.7
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["북한에 대한 인식", "북한이 우리에게 어떤 대상이라고 생각하십니까?"],
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
            return context.datasetIndex === curIndex
          },
        },
        legend: {
          display: true,
          maxWidth: 300,
          position: "right",
          align: "center",
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
}

function fnChart1Nk03() {

  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nk03";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];


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
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          },
        {
          label: "불가능하다",
          data: [
            59,	65,	65.7,	60.7,	64.2,	71.8,	71,	68,	71.2,	44.4,	48,	65.4,	67,	66.3,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["북한 대화 가능성", "통일을 함께 논의할 대상으로 북한 정권이 대화와", "타협이 가능한 상대라고 생각하십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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
            return context.datasetIndex === curIndex
          },
        },
        legend: {
          display: true,
          maxWidth: 300,
          position: "right",
          align: "center",
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

}

function fnChart1Nk10() {

  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nk10";
  const borderColors = [totalBorderColors[3], totalBorderColors[1]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[1]];
  const pointStyle = [totalPointStyle[3], totalPointStyle[1]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2009),
      datasets: [
        {
          label: "위협을 느낀다",
          data: [
            68.1,	61.9,	74.2,	75.9,	80.8,	80.4,	78.4,	88.9,	84.2,	80.1,	82.9,	77.7,	78.4,	76.3,	82.3,	80.9
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "위협을 느끼지 않는다",
          data: [
            31.8,	38.1,	25.8,	26.1,	19.2,	19.7,	21.6,	11.2,	15.8,	19.9,	17, 22.4,	21.5,	23.7,	17.7,	19
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["북핵 위협", "북한의 핵무기 보유에 대해 얼마나 위협을 느끼십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align:"start",
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
}

function fnChart1Nkp03() {

  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nkp03";
  const borderColors = [totalBorderColors[1], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[1],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[1], totalPointStyle[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2009),
      datasets: [
        {
          label: "만족",
          data: [
            30.3,	34.3,	31.8,	86.3,	40.1,	34.4,	57.6,	53.6,	49.2,	44.6,	59.1,	65.6,	55.9,	37.7,	35,	45.6
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "불만족",
          data: [
            69.7,	65.7,	18.1,	14.2,	60, 65.6,	42.4,	46.4,	50.8,	55.4,	40.9,	34.4,	44.1,	62.2,	65,	54.3
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["대북정책 만족도", "현 정부의 대북정책에 대해 얼마나 만족하십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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


}

function fnChart1Nkp07_11() {
  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nkp07_11";
  const borderColors = [totalBorderColors[0], totalBorderColors[5], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2013),
      datasets: [
        {
          label: "찬성",
          data: [
            52.3,	54.2,	55.1,	52.4,	49.8,	40,	38.1,	45.6,	44.2,	55.8,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor:borderColors[0],
          },
        {
          label: "반반/보통",
          data: [
            27.9,	28.1,	27.2,	31.8,	31.1,	35,	34.4,	32.1,	34,	28.3
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "반대",
          data: [
            19.8,	17.8,	17.8,	15.8,	19.1,	24.9,	27.5,	22.3,	21.8,	16
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["핵무장 의견", "한국도 핵무기를 가져야 한다."],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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

}

function fnChart1Nkd01_11() {
  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Nkd01_11";
  const borderColors = [totalBorderColors[0], totalBorderColors[5]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[5]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2013),
      datasets: [
        {
          label: "친근",
          data: [
            52.3,	54.2,	55.1,	52.4,	49.8,	40,	38.1,	45.6,	44.2,	55.8,
          ],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "친근하지 않음",
          data: [
            27.9,	28.1,	27.2,	31.8,	31.1,	35,	34.4,	32.1,	34,	28.3
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
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
          text: ["탈북민 친근감","한국에 거주하는 탈북자(새터민)가 얼마나 친근하게 느껴지십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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

}

function fnChart1Fp01() {
  deleteChart();
  const subject = document.getElementById("code");
  subject.innerHTML = "Fp01";
  const borderColors = [totalBorderColors[0], totalBorderColors[1],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColors[3],totalBorderColors[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4]];


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
        borderColor: borderColors[0],
        tension: 0,
        pointStyle: pointStyle[0],
        backgroundColor: borderColors[0],
        pointBorderColor: borderColors[0],
        borderWidth: borderWidth,
        pointRadius: pointRadius,
        },
      {
        label: "일본",
        data: [
          11.5,	9.5,	8.5,	9.6,	9.2,	6.8,	5.1,	4.5,	3.7,	5.4,	8.8,	4.8,	5.4,	6.1,	4.8,	5.2,
        ],
        borderColor: borderColors[1],
        pointStyle: pointStyle[1],
        backgroundColor: borderColors[1],
        pointBorderColor: borderColors[1],
        borderWidth: borderWidth,
        pointRadius: pointRadius,
        tension: 0,
      },
      {
        label: "북한",
        data: [
          24.2,	20.4,	15.9,	14.9,	15.9,	20.6,	11,	9.7,	8.8,	11.1,	11.5,	20.8,	19.8,	18.1,	14.4,	10.6
        ],
        borderColor: borderColors[2],
        pointStyle: pointStyle[2],
        backgroundColor: borderColors[2],
        pointBorderColor: borderColors[2],
        borderWidth: borderWidth,
        pointRadius: pointRadius,
        tension: 0,
      },
      {
        label: "중국",
        data: [
          10.2,	7.9,	6.1,	4.21,	5.3,	5.9,	7.3,	10.4,	8.8,	10.6,	5.4,	4,	3.5,	7.9,	4,	4.4,
        ],
        // backgroundColor: ["rgba(0, 0, 0, 0)"],
        borderColor: borderColors[3],
        pointStyle: pointStyle[3],
        backgroundColor: borderColors[3],
        pointBorderColor: borderColors[3],
        borderWidth: borderWidth,
        pointRadius: pointRadius,
        tension: 0,
      },
      {
        label: "러시아",
        data: [
          0.9,	1.5,	1,	0.8,	0.8,	0.9,	0.5,	1,	1.1,	0.5,	1.2,	0.2,	0.2,	1,	0.7,	0.6,
        ],
        borderColor: borderColors[4],
        pointStyle: pointStyle[4],
        backgroundColor: borderColors[4],
        pointBorderColor: borderColors[4],
        borderWidth: borderWidth,
        pointRadius: pointRadius,
        tension: 0,
      },
    ],
  },
  options: {
    aspectRatio: 1.2,
    // responsive: false,
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
          size: `20rem`,
        },
        align: "start",
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
}

function fnChart1Fp02() {
  
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Fp02)";
  const borderColors = [totalBorderColors[0], totalBorderColors[1],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColors[3],totalBorderColors[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          pointRadius: pointRadius,
          },
        {
          label: "일본",
          data: [
            25.8,	34.1,	17.4,	10.4,	11.6,	12.2,	15.9,	25.1,	15.7,	11,	7.8,	13.9,	28.2,	18.5,	11.5,	7.7
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "북한",
          data: [
            36.1,	34.2,	53,	55.7,	45.8,	47.5,	57,	49.6,	55,	64.9, 62.5,	32.4,	30.6,	40.8,	38.5,	36.1
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "중국",
          data: [
            15.5,	14.6,	15.8,	24.5,	33.7,	30.4,	21.4,	17.8,	23.3,	17.5,	23,	46.2,	34.2,	31.6,	44.7,	43.8,
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "러시아",
          data: [
            1.2,	1.1,	1.2,	0.3,	0.4,	1.3,	2.2,	1.3,	1.6,	1.8,	2,	0.1,	0.8,	0.9,	9.2
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
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
          text: ["평화위협국가","다음 국가들 중에서 어느 나라가 한반도의 평화에 가장 위협적인 나라라고 생각하십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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
}

function fnChart2Uni01() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "필요하다",
          data: [
            94.8,	93.4,	93.1,	100,	97.8,	94.9,	97.7,	95.3,	93.3,	93.3
          ],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "반반/보통",
          data: [
            4.1,	5.8,	6.1,	0,	1.5,	3.6,	1.5,	4.7,	6.7,	5.8,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "필요하지 않다",
          data: [
            1.1,	0.8,	0.8,	0,	0.7,	1.5,	0.8,	0,	0,	0.9,
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["통일 필요성", "귀하는 북한에 살고 계실 때 통일이 얼마나 필요하다고 생각하셨습니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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
            font: {
              size: 14
            },
          }
        },
        scales:{
          ticks:{
            display: true,
          },
        }
        
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
}

function fnChart2Uni03() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Uni03)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4],totalBorderColors[1]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColorsRGB[3],totalBorderColorsRGB[4],totalBorderColorsRGB[1]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2],totalPointStyle[3],totalPointStyle[4],totalPointStyle[1]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "이산가족의 고통을 해결해 주기 위해",
          data: [
            7.1,	3.6,	8.8,	8.3,	4.7,	7.6,	5.8,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "남북 간에 전쟁위협을 없애기 위해",
          data: [
            12.1,	8.6,	12.4,	9.9,	14.1,	6.7,	4.8,
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "북한주민이 잘 살 수 있도록",
          data: [
            48.9,	47.5, 41.6,	29.5,	30.6,	49.5,	26,
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "북한이 보다 선진국이 되기 위해서",
          data: [
            7.8,	10.1,	4.4,	12.1,	5.9,	4.8,	11.5
            ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
  
        },
        {
          label: "기타",
          data: [
            0.7,	1.4,	2.2,	3,	2.4,	2.9,	4.8,
            ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
  
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["통일 이유", "귀하는 북한에 살고 계실 때 통일이 되어야 하는 가장","큰 이유가 다음 중 무엇이라고 생각하십니까?"],
          color: "white",
          font:{
            size: 20,
          },
          align: "start",
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

}

function fnChart2Sk01() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Sk01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "지원과 협력의 대상",
          data: [
            62.9,	69.7,	76.2,	67.4,	70.5,	65,	62.1,	64.7,	58.1,	70.2
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "선의의 경쟁 대상",
          data: [
            2.1,	1.6,	2.3,	2.1,	4.3,	2.2,	4.6,	1.2,	2.9,	4.8,
          
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "경계대상 및 안전위협대상",
          data: [
            35.1,	28.7,	21.5,	30.5,	25.2,	32.8,	33.3,	34.1,	39,	25
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["남한에 대한 인식", "귀하는 북한에 살고 계실 때 남한이 북한에게", "어떤 대상이라고 생각하고 있었습니까?"],
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
}

function fnChart2Sk03() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Skd03)";  
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "자주 접해 봤다",
          data: [
            43.3,	42.6,	43.1,	41.1,	59,	51.8,	43.2,	41.2,	47.6,	43.3,
          ],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: 'rect',
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "한두 번 접해봤다",
          data: [
            30.9, 46.7,	44.6, 44.7,	30.2,	36.5,	43.2,	40,	44.8,	40.4,
          
          ],
          borderColor: borderColors[1],
          pointStyle: 'rect',
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "전혀 접해보지 못 했다",
          data: [
            25.8,	10.7,	12.3,	14.2,	10.8,	11.7,	13.6,	18.8,	7.6,	16.3
          ],
          borderColor: borderColors[2],
          pointStyle: 'rect',
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["남한 문화경험", "귀하는 북한에 살고 계실 때 남한 방송, 영화, ", "드라마, 노래 등을 접해본 경험이 있습니까?"],
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
            return context.datasetIndex === curIndex
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
}

function fnChart2Sk06() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Skd06)";  
  const borderColors = [totalBorderColors[3],totalBorderColors[5]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[5]]
  const pointStyle = [totalPointStyle[3], totalPointStyle[5]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "위협적이지 않다",
          data: [
            10.4,	9.1,	16.2,	13.5,	10.1,	11,	17.4,	10.6,	13.4,	15.4
          
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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

}

function fnChart2Sk07() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Skd07)";
  const borderColors = [totalBorderColors[1],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[1],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[1], totalPointStyle[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "알고 있다",
          data: [
            66,	66.4,	65.3,	62.4,	66.9,	63.5,	53.1,	56.5,	44.8,	52.9
          ],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "알지 못 한다",
          data: [
            34,	33.6,	34.7,	37.6,	33.1,	36.5,	46.9,	43.6,	55.2,	47.1
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["대북지원 인식", "귀하는 북한주민들이 남한이 쌀, 비료 등을 북한에 지원한 적이", "있다는 것을 얼마나 알고 있다고 생각하십니까?"],
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

}

function fnChart2Nk02() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Nk02)";
  const borderColors = [totalBorderColors[0],totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "보통",
          data: [
            34,	32.8,	33.8,	34.8,	38.1,	31.4,	34.8,	27.1,	31,	31.7
          
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "높음",
          data: [
            29.9,	42.6,	31.5,	38.3,	23.7,	36.5,	36.4,	50.6,	38.1,	38.5
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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

}

function fnChart2Nk07() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Nk07)";  
  const borderColors = [totalBorderColors[0],totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "반반/보통",
          data: [
            23.4,	28.1,	19, 28.8,	27.1,	26.7,	40.4
          
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "반대",
          data: [
            29.8,	20.1,	30.7, 17.4,	15.3,	23.8,	15.4
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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

}

function fnChart2Fp01() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Fp01)";
  const borderColors = [totalBorderColors[0],totalBorderColors[1],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[1],totalBorderColorsRGB[2],totalBorderColorsRGB[3],totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[1],totalPointStyle[2],totalPointStyle[3],totalPointStyle[4]];

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
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "일본",
          data: [
            0.8,	0,	0,	0,	0.7,	0,	4.7,	1,	1
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "남한",
          data: [
            22.1,	13.1,	16.3,	21.6,	16.1,	22.7,	12.9,	22.9,	20.2
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "중국",
          data: [
            72.1,	83.1,	79.4,	74.8,	76.6,	71.2,	67.1,	69.5,	65.4
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
        {
          label: "러시아",
          data: [
            3.3,	2.3,	2.8,	1.4,	6.6,	6.1,	12.9,	5.7,	11.5
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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

}

function fnChart2Skd01() {
  deleteChart();

  const subject = document.getElementById("code");
  subject.innerHTML = "Skd01)";
  const borderColors = [totalBorderColors[1],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[1],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[1], totalPointStyle[3]];


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "친근함",
          data: [
            90.8,	89.3,	87.7, 90.7,	92.5,	90.5,	92.4,	90.5,	88.5,	87.5
          ],
          borderColor: borderColors[0],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "친근하지 않음",
          data: [
            9.3,	10.6,	12.3,	9.2,	7.5,	9.5,	7.6,	9.4,	11.4,	12.5
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: borderWidth,
          pointRadius: pointRadius,
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: 1.2,
      // responsive: false,
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
          text: ["남한 주민 친근감", "귀하는 남한에 살면서 남한 주민들이 얼마나 친근하게 느껴지십니까?"],
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
}

function fnChart3q1_1() {

}

fnChart1Uni01();