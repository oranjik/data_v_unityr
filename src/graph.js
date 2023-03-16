Chart.defaults.font.family = 'NanumSquare';

const totalBorderColors = ["#3E5FFF", "#40FF76", "#E94B03", "#FF006E", "#804AA8", "#FF8A0A", "#636363"]
const totalBorderColorsRGB = [[62,95,255], [64,255,118], [233,75,3], [255,0,110],[128,74,168],[255,138,10], [99,99,99]]
const totalPointStyle = ['rect', 'cross', 'circle', 'rectRot', 'triangle', 'rectRounded', 'rect']
const totalPointRadius = [5, 5, 4, 5, 4, 5, 5]
const imageSource = ['./img/usa.png', './img/japan.png','./img/n_korea.png','./img/china.png','./img/russia.png']

let curIndex = -1;
let curDataIndex = -1;
const ctx = document.getElementById("myChart");

const mobileScreenSize = 390;

const aspectRatioMobile = 1;
const aspectRatioWeb = 1;
const borderWidthMobile = 1;
const borderWidth = 3;
const pointRadiusMobile = 2;
const pointRadius = 4;
const pointRadiusBig = 5;

const titleSizeMobile = 13;
const titleSizeWeb = 24;
const titleSizeWeb_index = 18;
const titleSizeMobile_index = 16;
const titleBottomMobile = 10;
const titleBottomWeb = 60;
const titleBottomWeb_index = 30;

const legendFontSizeMobile = 10;
const legendFontSizeWeb = 14;
const legendLabelPaddingMobile = 10;
const legendLabelPaddingWeb = 40;

const labelFontSizeMobile = 10;
const labelFontSizeWeb = 14;

const borderDashWeb = [10, 5];


const pluginMultipleImg = {
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

const plugin_1img = {
  id: 'background_image',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    const {top, left, width, height, right, bottom} = chart.chartArea;
    const x = left;
    const y = top;
    const image = new Image();
    image.src = options.imgSrc;
    const imageWidth = right - left;
    const imageHeight = bottom - top;
    ctx.drawImage(image, x, y, imageWidth, imageHeight);
  }
}

const getGradient = (ctx, chartArea, start_color, stop_color) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, stop_color);
    gradient.addColorStop(1, start_color);
  }
  return gradient;
}

const deleteChart = () => {
  if(Chart.getChart("myChart")){
    const prevChart = Chart.getChart("myChart");
    prevChart.destroy();
  }
};


function fnChart1Uni01() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "필요하다",
          data: [
            64.1,	51.6,	56.4,	59.3,	53.8,	54,	54.9,	55.9,	52,	53.7,	54,	59.7,	53.6,	52.9,	44.6,	46,
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "반반/보통이다",
          data: [
            20.9,	23.2,	23.5,	20.4,	25.1,	21.6,	21.5,	22.6,	24.6,	22.5,	24.5,	24.2,	26.4,	22.4,	26,	27.9,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "필요없다",
          data: [
            15,	25.2,	20.1,	20.4,	21.1,	21.4,	23.6,	21.6,	23.4,	23.8,	21.5,	16.1,	20,	24.7,	29.4,	26.1,
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart1_1_bg.png',
        },
        title: {
          display: true,
          text: ["통일 필요성", "남북한 통일이 얼마나 필요하다고 생각하십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 10,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart1Uni06() {  
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni06)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4],totalBorderColors[1]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColorsRGB[3],totalBorderColorsRGB[4],totalBorderColorsRGB[1]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4], totalPointStyle[1]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[2],totalPointRadius[3], totalPointRadius[4], totalPointRadius[1]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, {
      beforeInit: function(chart, options) {
        chart.legend.afterFit = function() {
          this.height = this.height + 100;
        };
      }
    }, plugin_1img],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "같은 민족이니까",
          data: [
            50.7,	58.5,	44.3,	43.3,	41.9,	46,	40.4,	42.6,	42,	38.9,	40.4,	45.1,	35.2,	37.3,	45.7,	42.3,
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "이산가족의 고통을 해결해 주기 위해",
          data: [
            8.9,	6.6,	8.6,	7,	7.1,	9.1,	8.4,	8.9,	11.4,	12.2,	10.3,	6.9,	10,	7.4,	11.3,	10.7,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "남북 간에 전쟁위협을 없애기 위해",
          data: [
            19.2,	14.6,	23.4,	24.2,	27.4,	25.2,	30.8,	26.8,	25.7,	29.2,	32.4,	31.4,	32.5,	37.9,	28.2,	31.6,
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "북한주민도 잘 살 수 있도록",
          data: [
            1.8,	2.9,	4.2,	4,	4.8,	4.4,	5.5,	3.8,	6.2,	4.8,	4,	3.4,	3.1,	2,	3.5, 4.6,
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "한국이 보다 선진국이 되기 위해서",
          data: [
            18.7,	17.3,	18.6,	20.8,	17.8,	14.5,	14.2,	17.5,	14.1,	14.2,	13,	12.9,	18.8,	15.3,	11.4,	10.7,
            ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
  
        },
        {
          label: "기타",
          data: [
            0.7,	0.1,	0.8,	5.9,	1.1,	0.8,	0.8, 0.4,	0.5,	0.7,	0.1,	0.2,	0.4,	0.3,	0,	0.1,
            ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
  
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return 1;
        else return aspectRatioWeb;
      },
      // responsive: false,
      // maintainAspectRatio: true,
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
        background_image: {
          imgSrc : 'img/chart1_2_bg.png',
        },
        title: {
          display: true,
          text: ["통일 이유", "우리나라가 통일이 되어야 하는 가장 큰 이유가 다음 중", "무엇이라고 생각하십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "bottom";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return 20;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
        },
        
      },
      scales: {
        y:
          {
            suggestedMin: 0,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nk01)";  
  const borderColors = [totalBorderColors[5], totalBorderColors[2],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[5],totalBorderColorsRGB[2],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[5], totalPointStyle[2], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[5], totalPointRadius[2], totalPointRadius[3]];


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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "경계대상 및 안전위협대상",
          data: [
            18.2,	17.1,	29.3,	32.4,	33.8,	32.1,	37.6,	36.2,	38.1,	36.8,	38,	23.9,	27.2,	35.4,	33.3,	31.7
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart1_3_bg.png',
        },
        title: {
          display: true,
          text: ["북한에 대한 인식", "북한이 우리에게 어떤 대상이라고 생각하십니까?"],
          color: "white",
          font:{
              size: function(context) {
                if(context.chart.width < mobileScreenSize) return titleSizeMobile;
                else return titleSizeWeb;
              },
            },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nk03)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]]


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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return  pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 20,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nk10)";
  const borderColors = [totalBorderColors[3], totalBorderColors[0]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[0]];
  const pointStyle = [totalPointStyle[3], totalPointStyle[0]];
  const pointRadiusWeb = [totalPointRadius[3], totalPointRadius[0]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "위협을 느낀다",
          data: [
            68.1,	61.9,	74.2,	75.9,	80.8,	80.4,	78.4,	88.9,	84.2,	80.1,	82.9,	77.7,	78.4,	76.3,	82.3,	80.9
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart1_5_bg.png',
        },
        title: {
          display: true,
          text: ["북핵 위협", "북한의 핵무기 보유에 대해 얼마나 위협을 느끼십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align:"start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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

            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nkp03)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "만족",
          data: [
            30.3,	34.3,	31.8,	86.3,	40.1,	34.4,	57.6,	53.6,	49.2,	44.6,	59.1,	65.6,	55.9,	37.7,	35,	45.6
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nkp07_11)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]


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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 10,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nkd01_11)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "친근",
          data: [
            36.1,	36.2,	36.5,	42.4,	41.3,	39.5,	42.1,	43.8,	45.7,	52.4,	51.3,	53.4,	58.9,	42,	47.2,	42
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "친근하지 않음",
          data: [
            63.9,	63.8,	63.5,	57.6,	58.8,	60.5,	58,	56.3,	54.3,	47.6,	48.7,	46.6,	41.1,	58,	52.8,	58
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["탈북민 친근감","한국에 거주하는 탈북자(새터민)가 얼마나 친근하게", "느껴지십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 30,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Fp01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[1],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[1],totalBorderColorsRGB[2],totalBorderColorsRGB[3],totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[1], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[1], totalPointRadius[2],totalPointRadius[3],totalPointRadius[4]]


const myChart = new Chart(ctx, {
  type: "line",
  plugins: [ChartDataLabels, pluginMultipleImg],
  data: {
    labels: Array.from({ length: 16 }, (_, i) => i + 2007),
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
        borderWidth: function(context) {
          if(context.chart.width < mobileScreenSize) return borderWidthMobile;
          else return borderWidth;
        },
        pointRadius: function(context) {
          if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
          else return pointRadiusWeb[0];
        },
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
        borderWidth: function(context) {
          if(context.chart.width < mobileScreenSize) return borderWidthMobile;
          else return borderWidth;
        },
        pointRadius: function(context) {
          if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
          else return pointRadiusWeb[1];
        },
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
        borderWidth: function(context) {
          if(context.chart.width < mobileScreenSize) return borderWidthMobile;
          else return borderWidth;
        },
        pointRadius: function(context) {
          if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
          else return pointRadiusWeb[2];
        },
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
        borderWidth: function(context) {
          if(context.chart.width < mobileScreenSize) return borderWidthMobile;
          else return borderWidth;
        },
        pointRadius: function(context) {
          if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
          else return pointRadiusWeb[3];
        },
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
        borderWidth: function(context) {
          if(context.chart.width < mobileScreenSize) return borderWidthMobile;
          else return borderWidth;
        },
        pointRadius: function(context) {
          if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
          else return pointRadiusWeb[4];
        },
        tension: 0,
      },
    ],
  },
  options: {
    aspectRatio: function(context) {
      if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
      else return aspectRatioWeb;
    },
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
          size: function(context) {
            if(context.chart.width < mobileScreenSize) return titleSizeMobile;
            else return titleSizeWeb;
          },
        },
        align: "start",
        padding:{
          bottom: function(context) {
            if(context.chart.width < mobileScreenSize) return titleBottomMobile;
            else return titleBottomWeb;
          },
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
          if(context.chart.width < mobileScreenSize){
            return false;
          }
          else {
            return context.datasetIndex === curIndex;
          }
        },
      },
      legend: {
        display: false,
        maxWidth: 300,
        position: function(context) {
          if(context.chart.width < mobileScreenSize) return "bottom";
          else return "right";
        },
        align: "center",
        labels: {
          boxHeight: 0,
          padding: function(context) {
            if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
            else return legendLabelPaddingWeb;
          },
          color: 'white',
          font: {
            size:function(context) {
              if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
              else return legendFontSizeWeb;
            },
          },
        },
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
          suggestedMin: 0,
          suggestedMax: 80,
          grid:{
            color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            fontSize: 24,
            font: {
              size: function(context) {
                if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                else return labelFontSizeWeb;
              },
            },
            color: 'white',
          },
        },
      x:
        {
          grid:{
            // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
          },
          ticks: {
            autoSkip: false,
            fontSize: 24,
            maxRotation: 90,
            minRotation: 90,
            font: {
              size: function(context) {
                if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                else return labelFontSizeWeb;
              },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Fp02)";
  const borderColors = [totalBorderColors[0], totalBorderColors[1],totalBorderColors[2],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[1],totalBorderColorsRGB[2],totalBorderColorsRGB[3],totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[1], totalPointStyle[2], totalPointStyle[3], totalPointStyle[4]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[1], totalPointRadius[2],totalPointRadius[3],totalPointRadius[4]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, pluginMultipleImg],
    data: {
      labels: Array.from({ length: 16 }, (_, i) => i + 2007),
      datasets: [
        {
          label: "미국",
          data: [
            21.2,	16,12.7,	8.2,	8.6,	9.5,	4.4,	5.3,	4.8,	5,	0.5,	5.4,	5.9,	8.3,	4.3,	3.2
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "러시아",
          data: [
            1.4, 1.2,	1.1,	1.2,	0.3,	0.4,	1.3,	2.2,	1.3,	1.6,	1.8,	2,	0.1,	0.8,	0.9,	9.2
          ],
          backgroundColor: ["rgba(0, 0, 0, 0)"],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["평화위협국가","다음 국가들 중에서 어느 나라가 한반도의 평화에", "가장 위협적인 나라라고 생각하십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              beginAtZero: true,
              stepSize: 20,
              fontSize: 24,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436')),
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "필요하다",
          data: [
            94.8,	93.4,	93.1,	100,	97.8,	94.9,	97.7,	95.3,	93.3,	93.3
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart2_1_bg.png',
        },
        title: {
          display: true,
          text: ["통일 필요성", "귀하는 북한에 살고 계실 때 통일이 얼마나 필요하다고", "생각하셨습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni03)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3],totalBorderColors[2],totalBorderColors[5],totalBorderColors[4],totalBorderColors[1]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3],totalBorderColorsRGB[2],totalBorderColorsRGB[5],totalBorderColorsRGB[4],totalBorderColorsRGB[1]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[3], totalPointStyle[2],totalPointStyle[5],totalPointStyle[4],totalPointStyle[1]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3], totalPointRadius[2],totalPointRadius[5],totalPointRadius[4],totalPointRadius[1]]

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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
  
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: "start",
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },

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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "bottom";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return 20;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 50,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Sk01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]


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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["남한에 대한 인식", "귀하는 북한에 살고 계실 때 남한이 북한에게 어떤", "대상이라고 생각하고 있었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },

          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },

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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Sk03)";  
  const borderColors = [totalBorderColors[0], totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 2011),
      datasets: [
        {
          label: "자주 접해 봤다",
          data: [
            43.3,	42.6,	43.1,	41.1,	59,	51.8,	43.2,	41.2,	47.6,	43.3,
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "한두 번 접해봤다",
          data: [
            30.9, 46.7,	44.6, 44.7,	30.2,	36.5,	43.2,	40,	44.8,	40.4,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "전혀 접해보지 못 했다",
          data: [
            25.8,	10.7,	12.3,	14.2,	10.8,	11.7,	13.6,	18.8,	7.6,	16.3
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart2_4_bg.png',
        },
        title: {
          display: true,
          text: ["남한 문화경험", "귀하는 북한에 살고 계실 때 남한 방송, 영화, ", "드라마, 노래 등을 접해본 경험이 있습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },

          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Sk06)";  
  const borderColors = [totalBorderColors[3],totalBorderColors[5]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[5]]
  const pointStyle = [totalPointStyle[3], totalPointStyle[5]];
  const pointRadiusWeb = [totalPointRadius[3], totalPointRadius[5]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart2_5_bg.png',
        },
        title: {
          display: true,
          text: ["핵무기 위협", "귀하는 북한에 살고 계실 때 북한의 핵무기가 남한에", "얼마나 위협적일 것이라고 생각하셨습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Sk07)";
  const borderColors = [totalBorderColors[0],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["대북지원 인식", "귀하는 북한주민들이 남한이 쌀, 비료 등을 북한에", "지원한 적이 있다는 것을 얼마나 알고 있다고 생각하십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 30,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nk02)";
  const borderColors = [totalBorderColors[0],totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart2_7_bg.png',
        },
        title: {
          display: true,
          text: ["김정은 지지도", "귀하는 북한에 살고 계실 때 김정은 위원장에 대한", "북한 주민들의 지지도가 어느 정도라고 생각하셨습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 20,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Nk07)";  
  const borderColors = [totalBorderColors[0],totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[5],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[5],totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[5], totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart2_8_bg.png',
        },
        title: {
          display: true,
          text: ["핵무기 보유견해", "귀하는 북한에 살고 계실 때, '북한은 핵무기를 가져야", "한다'라는 견해에 어떻게 생각하셨습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 10,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Fp01)";
  const borderColors = [totalBorderColors[0],totalBorderColors[1],totalBorderColors[5],totalBorderColors[3],totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[1],totalBorderColorsRGB[5],totalBorderColorsRGB[3],totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[1],totalPointStyle[5],totalPointStyle[3],totalPointStyle[4]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[1], totalPointRadius[5],totalPointRadius[3],totalPointRadius[4]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, pluginMultipleImg],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "미국",
          data: [
            1.6,	1.5,	1.4,	2.2,	0,	0,	2.4,	1,	1.9
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["주변국 친밀감","귀하는 북한에 살고 계실 때 다음 국가들 중 어느 나라를","가장 가깝게 느끼셨습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
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

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = [totalBorderColors[0],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];


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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
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
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["남한 주민 친근감", "귀하는 남한에 살면서 남한 주민들이 얼마나 친근하게","느껴지십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart3q1_1() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[4],totalBorderColors[5],totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[4],totalBorderColorsRGB[5], totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[4], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[4], totalPointRadius[5],totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "하루 세 끼 이상",
          data: [
            74.3,	81.1,	74.8,	87.9,	90.4,	87.3,	87.4,	87.8,	83.5,
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "하루 두 끼",
          data: [
            16.8,	12.1,	10.9,	8.6,	8.2,	8,	11.5,	10.4,	12.8
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "하루 한 끼",
          data: [
            5.3,	6.8,	12.9,	2.9,	1.5,	4,	1.2,	0.9,	2.8
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "한 끼도 못 먹을 때가 많았다",
          data: [
            3.5,	0,	1.4,	7.1,	0,	8,	0,	0.9,	0.9
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["끼니", "보통 하루 몇 끼를 먹었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q1_11() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 6 }, (_, i) => i + 2015),
      datasets: [
        {
          label: "있었음",
          data: [
            10.7,	8.2,	5.6,	5.7,	7,	8.3
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "없었음",
          data: [
            89.3,	91.8,	94.4,	94.3,	93,	91.7
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart3_2_bg.png',
        },
        title: {
          display: true,
          text: ["인트라넷", "북한에서 인트라넷 (해외접속이 차단된 북한 내부망)을", "사용해보신 적이 있었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q1_11_1() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 6 }, (_, i) => i + 2015),
      datasets: [
        {
          label: "있었음",
          data: [
            55.5,	46.4,	43.9,	44.8,	62.6,	56
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "없었음",
          data: [
            44.5,	53.6,	56.1,	55.2,	37.4,	44
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart3_3_bg.png',
        },
        title: {
          display: true,
          text: ["손전화", "북한에서 본인의 손전화(휴대폰)가 있었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 30,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q1_12() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 7 }, (_, i) => i + 2014),
      datasets: [
        {
          label: "있었음",
          data: [
            66,	72.1,	60.7,	57.1,	41.4,	60,	52.3
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "없었음",
          data: [
            34,	27.9,	39.3,	42.9,	58.6,	40,	47.7
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["남한 물건", "북한에서 남한산 물건을 사용해본 적이 있었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q1_13() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[4], totalBorderColors[5], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[4],totalBorderColorsRGB[5], totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[4], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[4], totalPointRadius[5],totalPointRadius[3]]


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 6 }, (_, i) => i + 2015),
      datasets: [
        {
          label: "가족 모두 충분한 양과 다양한 음식",
          data: [
            40,	34.1,	31.7,	26.4,	40.9,	36.7,
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "가족 모두 충분한 양, 그러나 다양하지 않은 음식",
          data: [
            41.4,	51.1,	50.8,	47.1,	45.2,	44,
          
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "가끔 먹을 것이 부족",
          data: [
            17.1,	11.9,	11.9,	17.2,	10.4,	18.3
          
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "자주 먹을 것이 부족",
          data: [
            1.4,	3,	5.6,	9.2,	3.5,	0.9
          
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["식생활 현황", "귀하가 북한을 떠나기 전, 1년 동안 귀댁의 식생활을", "가장 잘 나타낸 것은 어느 것입니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q4_1_1() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[3], totalBorderColors[2], totalBorderColors[5], totalBorderColors[0], totalBorderColors[4], totalBorderColors[1],totalBorderColors[0],totalBorderColors[3],totalBorderColors[2],totalBorderColors[4],totalBorderColors[5],totalBorderColors[6]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[2],totalBorderColorsRGB[5], totalBorderColorsRGB[0],totalBorderColorsRGB[4], totalBorderColorsRGB[1],totalBorderColorsRGB[0], totalBorderColorsRGB[3],totalBorderColorsRGB[2],totalBorderColorsRGB[4],totalBorderColorsRGB[5],totalBorderColorsRGB[6]];
  const pointStyle = [totalPointStyle[3], totalPointStyle[2], totalPointStyle[5], totalPointStyle[0],totalPointStyle[4], totalPointStyle[1],totalPointStyle[0],totalPointStyle[3],totalPointStyle[2],totalPointStyle[4],totalPointStyle[5],totalPointStyle[6]];
  const pointRadiusWeb = [totalPointRadius[3], totalPointRadius[2], totalPointRadius[5],totalPointRadius[0],totalPointRadius[4],totalPointRadius[1],totalPointRadius[0],totalPointRadius[3],totalPointRadius[2],totalPointRadius[4],totalPointRadius[5],totalPointRadius[6]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels,plugin_1img],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "중앙당 간부",
          data: [
            76.1,	84.1,	73.5,	80.7,	83.7,	80.2,	79.3,	81.7,	77.1
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return  pointRadiusWeb[0];
          },
          },
        {
          label: "지방당 간부",
          data: [
            2.7,	0,	3.4,	0.7,	0,	0.8,	2.3,	0.9,	0
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "법기관(보위부, 안전부, 검찰) 간부",
          data: [
            14.2,	13.6,	18.4,	11.4,	12.6,	14.3,	12.6,	11.3,	15.6
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return  pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "인민위원회 간부",
          data: [
            0.9,	0,	0,	0,	0,	0,	0,	0,	1
          
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "전문직(의사, 교수, 기술자 등)",
          data: [
            0,	0,	0,	0,	0,	0,	0,	0,	0
          
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
        {
          label: "군관",
          data: [
            0,	0,	0.7,	0,	0,	0,	0,	0,	0
          
          ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
        },
        {
          label: "외화벌이",
          data: [
            5.3,	2.3,	4.1,	5,	3,	4,	5.8,	4.4,	5.5
          ],
          borderColor: borderColors[6],
          pointStyle: pointStyle[6],
          backgroundColor: borderColors[6],
          pointBorderColor: borderColors[6],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[6];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "시장 상인",
          data: [
            0.9,	0,	0,	2.1,	0.7,	0,	0, 0,	1
          
          ],
          borderColor: borderColors[7],
          pointStyle: pointStyle[7],
          backgroundColor: borderColors[7],
          pointBorderColor: borderColors[7],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[7];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "기업소 공장 간부",
          data: [
            0,	0,	0,	0,	0,	0.8,	0,	1.7,	0
          
          ],
          borderColor: borderColors[8],
          pointStyle: pointStyle[8],
          backgroundColor: borderColors[8],
          pointBorderColor: borderColors[8],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[8];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "기업소 공장 노동자",
          data: [
            0,	0,	0,	0,	0,	0,	0,	0,	0
          
          ],
          borderColor: borderColors[9],
          pointStyle: pointStyle[9],
          backgroundColor: borderColors[9],
          pointBorderColor: borderColors[9],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[9];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "농장 관리일꾼",
          data: [
            0,	0,	0,	0,	0,	0,	0,	0,	0
          
          ],
          borderColor: borderColors[10],
          pointStyle: pointStyle[10],
          backgroundColor: borderColors[10],
          pointBorderColor: borderColors[10],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[10];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "농장원",
          data: [
            0,	0,	0,	0,	0,	0,	0,	0,	0
          
          ],
          borderColor: borderColors[11],
          pointStyle: pointStyle[11],
          backgroundColor: borderColors[11],
          pointBorderColor: borderColors[11],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[11];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart3_6_bg.png',
        },
        title: {
          display: true,
          text: ["잘사는 직업", "귀하는 북한에 거주할 당시 어느 직업을 가진 사람들이", "가장 잘산다고 생각했습니까? (1순위)"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "bottom";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return 10;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 100,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 20,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q8_1() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[1], totalBorderColors[3], totalBorderColors[2],totalBorderColors[5],totalBorderColors[4],totalBorderColors[6]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[1],totalBorderColorsRGB[3], totalBorderColorsRGB[2],totalBorderColorsRGB[5],totalBorderColorsRGB[4],totalBorderColorsRGB[6]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[1], totalPointStyle[3], totalPointStyle[2],totalPointStyle[5],totalPointStyle[4],totalPointStyle[6]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[1], totalPointRadius[3],totalPointRadius[2],totalPointRadius[5],totalPointRadius[4],totalPointRadius[6]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "돈 버는 것",
          data: [
            60.9,	50,	53.2,	46.8,	49.3,	52,	55.2,	43.1,	48.6
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "보안원/보위부 각종 단속",
          data: [
            20.9,	30.3,	29.8,	32.4,	27.6,	28.5,	26.4,	35.8,	27.1
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "간부에게 뇌물 고이는 것",
          data: [
            0.9,	3,	4.3,	2.2,	5.2,	2.4,	3.5,	3.7,	1.9
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "조직생활",
          data: [
            7.3,	6.8,	4.3,	8.6,	9,	5.7,	5.8,	9.2,	13.1
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "출세",
          data: [
            2.7,	4.6,	2.8,	4.3,	3.7,	0,	3.5,	2.8,	3.7
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
        {
          label: "자녀 교육",
          data: [
            5.5,	3,	5,	5,	5.2,	8.1,	4.6,	2.8,	2.8
          ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
        },
        {
          label: "기타",
          data: [
            1.8,	2.3,	0.7,	0.7,	0,	3.3,	1.2,	2.8,	2.8
          ],
          borderColor: borderColors[6],
          pointStyle: pointStyle[6],
          backgroundColor: borderColors[6],
          pointBorderColor: borderColors[6],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[6];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["일상문제", "일상에서 가장 걱정을 많이 했던 문제는 무엇이었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q12() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[0], totalBorderColors[4], totalBorderColors[5], totalBorderColors[3]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[4],totalBorderColorsRGB[5], totalBorderColorsRGB[3]];
  const pointStyle = [totalPointStyle[0], totalPointStyle[4], totalPointStyle[5], totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[4], totalPointRadius[5],totalPointRadius[3]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "많음-50% 이상",
          data: [
            12.1,	7.2,	10.2,	9.7,	8.9,	16.2,	8.1,	4.6,	8.3
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "보통-30% 초과 50% 이하",
          data: [
            14.8,	20.9,	14.3,	16.1,	18.5,	15.5,	10.3,	14.1,	12.8
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "적음-0% 초과 30% 이하",
          data: [
            60.8,	61.6, 59.9,	54.7,	57.8,	53.6,	52.9,	68,	62.4
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "전혀 없음",
          data: [
            12.1,	10.3,	15.6,	19.7,	14.8,	14.7,	28.7,	13.2,	16.5,
          
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: ["뇌물", "귀하가 북한에 거주할 당시에 벌어들인 전체 수입중에서", "각종 뇌물로 고인 액수의 비율은 얼마나 되었는지 골라주세요."],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q15() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[3], totalBorderColors[2], totalBorderColors[5], totalBorderColors[4], totalBorderColors[0], totalBorderColors[1],totalBorderColors[3],totalBorderColors[2],totalBorderColors[5],totalBorderColors[4],totalBorderColors[0]];
  const borderColorsRGB = [totalBorderColorsRGB[3],totalBorderColorsRGB[2],totalBorderColorsRGB[5], totalBorderColorsRGB[4],totalBorderColorsRGB[0], totalBorderColorsRGB[1],totalBorderColorsRGB[3],totalBorderColorsRGB[2],totalBorderColorsRGB[5],totalBorderColorsRGB[4],totalBorderColorsRGB[0]];
  const pointStyle = [totalPointStyle[3], totalPointStyle[2], totalPointStyle[5], totalPointStyle[4],totalPointStyle[0], totalPointStyle[1],totalPointStyle[3],totalPointStyle[2],totalPointStyle[5],totalPointStyle[4],totalPointStyle[0]];
  const pointRadiusWeb = [totalPointRadius[3], totalPointRadius[2], totalPointRadius[5],totalPointRadius[4],totalPointRadius[0],totalPointRadius[1],totalPointRadius[3],totalPointRadius[2],totalPointRadius[5],totalPointRadius[4],totalPointRadius[0]];

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "소매장사",
          data: [
            36.8,	38.8,	32.3,	26.8,	21.2,	14,	11.5,	25.3,	19.3
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "개인 편의봉사",
          data: [
            5.3,	5.2,	5.7,	2.4,	3.4,	6.1,	6.4,	3.5,	3.7
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "개인 (임)가공",
          data: [
            2.1,	4.3,	3.2,	2.4,	0,	2.6,	6.4,	1.2,	2.8
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "식당, 상점 임대 운영",
          data: [
            2.1,	0,	3.2,	4.9,	2.5,	0,	2.6,	2.3,	2.8
          
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "되거리장사",
          data: [
            11.6,	6,	16.1,	13,	22, 11.4,	7.7, 24.1,	10.1
          
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
        {
          label: "외화벌이 계통",
          data: [
            8.4,	12.1,	6.5,	16.3,	8.5,	10.5,	9,	14.9,	10.1
          
          ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
        },
        {
          label: "돈장사",
          data: [
            6.3,	5.2,	3.2,	8.1,	3.4,	6.1,	3.9,	4.6,	2.8
          ],
          borderColor: borderColors[6],
          pointStyle: pointStyle[6],
          backgroundColor: borderColors[6],
          pointBorderColor: borderColors[6],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[6];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "삯벌이",
          data: [
            3.2,	10.3,	8,	2.4,	6.8,	7.9,	19.2,	5.8,	5.5
          
          ],
          borderColor: borderColors[7],
          pointStyle: pointStyle[7],
          backgroundColor: borderColors[7],
          pointBorderColor: borderColors[7],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[7];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "해외 파견노력 근무",
          data: [
            0,	1.7,	1.6,	0,	0.8,	3.5,	3.9,	1.2,	0
          
          ],
          borderColor: borderColors[8],
          pointStyle: pointStyle[8],
          backgroundColor: borderColors[8],
          pointBorderColor: borderColors[8],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[8];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "기타",
          data: [
            24.2,	16.4,	20.2,	26,	31.4,	37.7,	29.5,	17.2,	20.2
          
          ],
          borderColor: borderColors[9],
          pointStyle: pointStyle[9],
          backgroundColor: borderColors[9],
          pointBorderColor: borderColors[9],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[9];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        {
          label: "해당없음(2020년 신설)",
          data: [
            null,	null,	null,	null,	null,	null,	null,	null,	22.9
          
          ],
          borderColor: borderColors[10],
          pointStyle: pointStyle[10],
          backgroundColor: borderColors[10],
          pointBorderColor: borderColors[10],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[10];
          },
          tension: 0,
          borderDash: borderDashWeb,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart3_9_bg.png',
        },
        title: {
          display: true,
          text: ["주요 수입원", "귀하가 북한에 거주할 당시에 가장 많은 수입을 얻은 일거리는", "무엇이었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "bottom";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return 10;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 40,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 5,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart3q17() {
  deleteChart();
  // const subject = document.getElementById("code");
  // subject.innerHTML = "Uni01)";
  const borderColors = [totalBorderColors[1], totalBorderColors[3], totalBorderColors[2], totalBorderColors[5],totalBorderColors[4],totalBorderColors[0]];
  const borderColorsRGB = [totalBorderColorsRGB[1],totalBorderColorsRGB[3],totalBorderColorsRGB[2], totalBorderColorsRGB[5],totalBorderColorsRGB[4],totalBorderColorsRGB[0]];
  const pointStyle = [totalPointStyle[1], totalPointStyle[3], totalPointStyle[2], totalPointStyle[5],totalPointStyle[4],totalPointStyle[0]];
  const pointRadiusWeb = [totalPointRadius[1], totalPointRadius[3], totalPointRadius[2],totalPointRadius[5],totalPointRadius[4],totalPointRadius[0]]

  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels, plugin_1img],
    data: {
      labels: Array.from({ length: 9 }, (_, i) => i + 2012),
      datasets: [
        {
          label: "북한",
          data: [
            23.1,	34.7,	30.4,	32.8,	29.1,	30.3,	45.2,	32.1,	21.1
          ],
          borderColor: borderColors[0],
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          },
        {
          label: "중국",
          data: [
            71.8,	62.7,	65.2,	60.3,	64.5,	66.1,	54.8,	63.1,	78.9
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "남한",
          data: [
            0,	1.7,	2.7, 5.2,	3.6,	2.8,	0,	4.8,	0
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "러시아",
          data: [
            0,	0,	0,	0,	1.8,	0,	0,	0,	0
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "일본",
          data: [
            0,	0.8,	0.9,	0.9,	0.9,	0.9,	0,	0,	0
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
        {
          label: "기타",
          data: [
            0,	0,	0.9,	0.9,	0,	0,	0,	0,	0
          ],
          borderColor: borderColors[5],
          pointStyle: pointStyle[5],
          backgroundColor: borderColors[5],
          pointBorderColor: borderColors[5],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[5];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
        background_image: {
          imgSrc : 'img/chart3_10_bg.png',
        },
        title: {
          display: true,
          text: ["원자재 수입국가", "장사 물건이나 사업용 원료, 자재는 주로 어느 나라", "것이었습니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return 14;
              else return 24;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return 10;
              else return 60;
            },
          },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "start",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            
            suggestedMin: 0,
            suggestedMax: 80,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#1D2C4A')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            border: {
              display: true,
            },
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoSkip: false,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
};

function fnChart4() {
  deleteChart();
  const borderColors = [totalBorderColors[0],totalBorderColors[3], totalBorderColors[2], totalBorderColors[1], totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3], totalBorderColorsRGB[2], totalBorderColorsRGB[1], totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[3], totalPointStyle[2], totalPointStyle[1], totalPointStyle[4]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3], totalPointRadius[2],totalPointRadius[1],totalPointRadius[4]]
  document.getElementById("menu-subtitle").style.display = 'block';
  document.getElementById("menu-subtitle").innerHTML ='남북통합지수';
  document.getElementById("menu-title").innerHTML = "남북통합지수<span style='font-size:12px; font-weight:500;'>(Inter-Korean Integration Index: IKII)</span>는 남한과 북한이 정치적, 경제적, 사회문화적, 의식상으로 통합되어 있는 수준을 계량적으로 보여주는 지표이다.";
  document.getElementById("menu-description").innerHTML = "<span style='font-size:12px'>남북통합지수는 크게 <b>구조통합지수</b>와 <b>의식통합지수</b>로 구성되어 있다. 또, 구조통합지수와 의식통합지수는 영역별(경제, 정치, 사회문화)로 나뉘어져 있다.</span>";
  document.getElementById("score-title").innerHTML = '통합의 영역과 배점';
  document.getElementById("chart-score").src = './img/score_4_web.svg';
  document.getElementById("chart-score-mobile").srcset = "./img/score_4_mobile.svg";


  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 32 }, (_, i) => i + 1989),
      datasets: [
        {
          label: "경제구조",
          data: [
            7.6, 7, 6.9, 8.4, 8.5, 8.9, 9.8, 9.7, 9.8, 13, 17, 20.3, 20.5, 23.9, 25.7, 26.5, 31.3, 31.1, 37.8, 31, 30.1, 28.4, 25.1, 24.8, 22, 26.2, 26.9, 12.1, 10.8, 12.1, 10.9, 10.6
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "정치구조",
          data: [
            9.1, 19.3, 18, 45.3, 9.4, 11.3, 9.7, 7.1, 11.1, 11.4, 12.8, 41.6, 23.6, 26.5, 33, 32.2, 41, 34.8, 52.3, 16.4, 12.3, 11.6, 13.2, 11.4, 10, 13.2, 13.3, 9.2, 8.8, 48.6, 18, 14.7
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "사회문화구조",
          data: [
            5.9, 5, 10.4, 17.3, 2.5, 2.6, 9.9, 3.4, 5, 11.6, 14.6, 22.3, 18.4, 24.3, 23.9, 24.6, 35.1, 29.9, 55.9, 43, 35.8, 34.7, 31.4, 30.8, 32.9, 35.9, 34.4, 31.8, 32.3, 51.8, 34.4, 32.9
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "구조통합",
          data: [
            22.6, 31.3, 35.3, 71, 20.4, 22.8, 29.4, 20.2, 25.9, 36, 44.4, 84.2, 62.5, 74.7, 82.6, 83.3, 107.4, 95.8, 146, 90.4, 78.2, 74.7, 69.7, 67, 64.9, 75.3, 74.6, 53.1, 51.9, 112.5, 63.3, 58.2
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
        {
          label: "의식통합",
          data: [
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 123.5, 119.5, 124.6, 124.2, 128.8, 124.5, 129.2, 127.5, 121.7, 120.9, 126, 129.8, 121.9
          ],
          borderColor: borderColors[4],
          pointStyle: pointStyle[4],
          backgroundColor: borderColors[4],
          pointBorderColor: borderColors[4],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[4];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
      // responsive: false,
      // maintainAspectRatio: false,
      onHover: (e, chartElement) => {
        e.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
          const activeDataset = myChart.getActiveElements()
          if (activeDataset.length) {
            myChart.data.datasets.forEach((dataset, index) => {
              if (index == activeDataset[0].datasetIndex) {
                curIndex = index;
                curDataIndex = activeDataset[0].index;
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
            curDataIndex = -1;
          }
          myChart.update();
      },
      plugins: {
        title: {
          display: true,
          text: "영역별 남북통합지수 추이",
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile_index;
              else return titleSizeWeb_index;
            },
          },
          align: 'start',
          padding:{
            top: function(context) {
              if(context.chart.width < mobileScreenSize) return 30;
              else return 50;
            },
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
          }
        },
        tooltip: {
          enabled: false,
        },
        
        datalabels: {
          color: function(context) {
            if (context.dataIndex === curDataIndex) {
              return 'white';
            } 
            else return 'gray';
          },
          display: false,
          anchor : 'start',
          offset: 10,
          labels: {
            title: {
              font: {
                size: 25,
                lineHeight: 1.6,
                family: "acumin-pro-condensed",
                weight: 700,
              },
              align: function(context) {
                if (context.dataIndex == 3 || context.dataIndex == 11){
                  return 'top';
                } else if (context.dataIndex == 18) {
                  return '176';
                } else {
                  return '178';
                }
              },
              formatter: function(value, context) {
                return context.chart.data.labels[context.dataIndex]
              },
              display: function(context) {
                return context.datasetIndex == 3 && 
                (context.chart.data.labels[context.dataIndex] == 1992 || 
                 context.chart.data.labels[context.dataIndex] == 2000 || 
                 context.chart.data.labels[context.dataIndex] == 2007 || 
                 context.chart.data.labels[context.dataIndex] == 2018)
              },
            },
            value: {
              font : {
                size: 8,
              },
              align: function(context) {
                if (context.dataIndex == 3){
                  return '-80';
                } else if (context.dataIndex == 11) {
                  return '-110';
                }
                else {
                  return '130';
                }
              },
              padding: function(context) {
                if (context.dataIndex == 3){
                  return {left: 55, top: 10};
                } else if (context.dataIndex == 11) {
                  return {top: 12};
                } else if (context.dataIndex == 18) {
                  return {left: 35, top: 7};
                } else {
                  return {left: 35, top: 5};
                }
              },
              formatter: function(value, context) {
                if(context.dataIndex == 3) {
                  return "남북기본합의서 채택";
                }
                if(context.dataIndex == 11) {
                  return "제1차 남북정상회담 개최";
                }
                if(context.dataIndex == 18) {
                  return "제2차 남북정상회담 개최";
                }
                if(context.dataIndex == 29) {
                  return "제1차 남북정상회담 개최";
                }
              },
              display: function(context) {
                return context.datasetIndex == 3 && 
                (context.chart.data.labels[context.dataIndex] == 1992 || 
                 context.chart.data.labels[context.dataIndex] == 2000 || 
                 context.chart.data.labels[context.dataIndex] == 2007 || 
                 context.chart.data.labels[context.dataIndex] == 2018)
              },
            },
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
        },
        scales:{
          ticks:{
            display: false,
          }
        }
        
      },
      scales: {
        y:
          {
            suggestedMin: 0,
            suggestedMax: 150,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 30,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart6() {
  deleteChart();

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = ["#00468A","#3A82FF", "#C0DCFF"];
  const borderColorsRGB = [[0, 70, 138], [58, 130, 255], [192, 220, 255]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[0],totalPointStyle[0]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[0], totalPointRadius[0]]

  document.getElementById("menu-subtitle").style.display = 'none';
  document.getElementById("menu-title").innerHTML = '경제영역 구조통합';
  document.getElementById("menu-description").innerHTML = '경제통합은 남북한이 하나의 경제권으로 통합된 수준 또는 그 과정을 의미한다. 남북한의 물적 자원 교류에서 부터 생산요소의 자유로운 이동, 그리고 상호의존의 구조가 확대되는 과정 전반을 포괄한다. 배점은 제도적 통합에 90점, 관계적 통합에 160점을 각각 배정하여 총 250점이다.';
  document.getElementById("score-title").innerHTML = '경제영역 변인들의 분류와 배점';
  document.getElementById("chart-score").src = './img/score_6_web.svg';
  document.getElementById("chart-score-mobile").srcset = "./img/score_6_mobile.svg";
  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 32 }, (_, i) => i + 1989),
      datasets: [
        {
          label: "제도통합지수",
          data: [
            1, 1, 1, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5.5, 5.5, 6, 6, 6.5, 8.3, 8.3, 8.7, 7.7, 7.7, 6.6, 7.2, 7.5, 6.8, 6.8, 7.6, 7.6, 7.8, 7.3
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "관계통합지수",
          data: [
            6.6, 6, 5.9, 6.4, 6.5, 6.9, 7.8, 7.7, 7.8, 8, 12, 15.3, 15.5, 18.4, 20.2, 20.5, 25.3, 24.6, 29.5, 22.7, 21.4, 20.7, 17.4, 18.2, 14.8, 18.7, 20.1, 5.3, 3.2, 4.5, 3.1, 3.3
            ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "구조통합지수(제도+관계)",
          data: [
            7.6, 7, 6.9, 8.4, 8.5, 8.9, 9.8, 9.7, 9.8, 13, 17, 20.3, 20.5, 23.9, 25.7, 26.5, 31.3, 31.1, 37.8, 31, 30.1, 28.4, 25.1, 24.8, 22, 26.2, 26.9, 12.1, 10.8, 12.1, 10.9, 10.6
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: "경제영역 구조통합지수 (UN 명목소득 기준)",
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile_index;
              else return titleSizeWeb_index;
            },
          },
          align: 'start',
          padding:{
            top: function(context) {
              if(context.chart.width < mobileScreenSize) return 0;
              else return 50;
            },
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb_index;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          maxHeight: 400,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          verticalAlign: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return 20;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 40,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 5,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            // grid:{
            //   // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            // },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart7() {
  deleteChart();

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = ["#6B0040", "#FF006E", "#FF9BCD"];
  const borderColorsRGB = [[107, 0, 64], [220, 0, 110], [255, 155, 205]];
  const pointStyle = [totalPointStyle[3], totalPointStyle[3],totalPointStyle[3]];
  const pointRadiusWeb = [totalPointRadius[3], totalPointRadius[3], totalPointRadius[3]]

  document.getElementById("menu-subtitle").style.display = 'none';
  document.getElementById("menu-title").innerHTML = '정치영역 구조통합';
  document.getElementById("menu-description").innerHTML = '정치통합은 남북한이 정치군사적으로 하나의 통일체를 이룬 수준 또는 그 진행 과정을 의미한다. 정치, 군사 회담을 통해 교류가 확대되고 나아가 외교, 군사적 협력으로 이어지는 과정을 포함한다. 배점은 제도적 통합에 90점, 관계적 통합에 160점을 각각 배정하여 총 250점이다.';
  document.getElementById("score-title").innerHTML = '정치영역 변인들의 분류와 배점';
  document.getElementById("chart-score").src = './img/score_7_web.svg';
  document.getElementById("chart-score-mobile").srcset = "./img/score_7_mobile.svg";
  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 32 }, (_, i) => i + 1989),
      datasets: [
        {
          label: "제도통합지수",
          data: [
            1,	1,	1,	2,	2.5,	2.6,	3.1,	3.2,	3.3,	3.8,	4.3,	4.4,	4.5,	4.6,	4.7,	6,	6.1,	6.2,	6.3,	6.3,	6.9,	6.8,	6.8,	6.5,	6.4,	6.4,	6,	5.3,	6.3,	8.5,	8.7,	8.4
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "관계통합지수",
          data: [
            8.1,	18.3,	17,	43.3,	6.9,	8.7,	6.6,	3.9,	7.8,	7.6,	8.5,	37.2,	19.1,	21.9,	28.3,	26.2,	34.9,	28.6,	46,	10.1,	5.4,4.8,	6.4,	4.9,	3.6,	6.8,	7.3,	3.9,	2.5,	40.1,	9.3,	6.3
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "구조통합지수(제도+관계)",
          data: [
            9.1,	19.3,	18,	45.3,	9.4,	11.3,	9.7,	7.1,	11.1,	11.4,	12.8,	41.6,	23.6,	26.5,	33,	32.2,	41,	34.8,	52.3,	16.4,	12.3,	11.6,	13.2,	11.4,	10,	13.2,	13.3,	9.2,	8.8,	48.6,	18,	14.7
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: "정치영역 구조통합지수",
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile_index;
              else return titleSizeWeb_index;
            },
          },
          align: 'start',
          padding:{
            top: function(context) {
              if(context.chart.width < mobileScreenSize) return 0;
              else return 50;
            },
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb_index;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart8() {
  deleteChart();

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = ["#722E00","#F85606", "#FFA084"];
  const borderColorsRGB = [[114, 46, 0], [248, 86, 6], [255, 160, 132]];
  const pointStyle = [totalPointStyle[2], totalPointStyle[2], totalPointStyle[2]];
  const pointRadiusWeb = [totalPointRadius[2], totalPointRadius[2], totalPointRadius[2]]

  document.getElementById("menu-subtitle").style.display = 'none';
  document.getElementById("menu-title").innerHTML = '사회문화 구조통합';
  document.getElementById("menu-description").innerHTML = '사회문화적 통합은 남북한이 하나의 사회문화적 공동체를 이뤄나가는 과정을 의미한다. 인적 왕래, 공동행사 등을 통해 상대방의 사회문화를 더욱 이해,수용하며 동질성을 형성해가는 과정이다. 배점은 제도적 통합에 90점, 관계적 통합에 160점을 각각 배정하여 총 250점이다.';
  document.getElementById("score-title").innerHTML = '사회문화영역 변인들의 분류와 배점';
  document.getElementById("chart-score").src = './img/score_8_web.svg';
  document.getElementById("chart-score-mobile").srcset = "./img/score_8_mobile.svg";
  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 32 }, (_, i) => i + 1989),
      datasets: [
        {
          label: "제도통합지수",
          data: [
            1.1,	1.1,	1.1,	1.3,	1.5,	1.6,	1.9,	2.2,	3.2,	6.9,	7,	7.1,	7.2,	7.2,	7.4,	7.5,	7.9,	8.2,	12.4,	12,	13,	12,	12.1,	12.1,	12.9,	14.8,	13.7,	13.8,	14.2,	14.6,	15,	14.7
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "관계통합지수",
          data: [
            4.8,	3.9,	9.3,	16,	1,	1,	8,	1.2,	1.8,	4.7,	7.6,	15.2,	11.2,	17.1,	16.5,	17.1,	27.2,	21.7,	43.5,	31,	22.8,	22.7,	19.3,	18.7,	20,	21.1,	20.7,	18,	18.1,	37.2,	19.4,	18.2
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "구조통합지수(제도+관계)",
          data: [
            5.9,	5,	10.4,	17.3,	2.5,	2.6,	9.9,	3.4,	5,	11.6,	14.6,	22.3,	18.4,	24.3,	23.9,	24.6,	35.1,	29.9,	55.9,	43,	35.8,	34.7,	31.4,	30.8,	32.9,	35.9,	34.4,	31.8,	32.3,	51.8,	34.4,	32.9
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: "사회문화영역 구조통합지수",
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile_index;
              else return titleSizeWeb_index;
            },
          },
          align: 'start',
          padding:{
            top: function(context) {
              if(context.chart.width < mobileScreenSize) return 0;
              else return 50;
            },
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb_index;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 60,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 10,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 90,
              minRotation: 90,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart9() {
  deleteChart();

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = [totalBorderColors[0],totalBorderColors[3], totalBorderColors[2], totalBorderColors[4]];
  const borderColorsRGB = [totalBorderColorsRGB[0],totalBorderColorsRGB[3], totalBorderColorsRGB[2], totalBorderColorsRGB[4]]
  const pointStyle = [totalPointStyle[0], totalPointStyle[3], totalPointStyle[2], totalPointStyle[4]];
  const pointRadiusWeb = [totalPointRadius[0], totalPointRadius[3], totalPointRadius[2],totalPointRadius[4]]

  document.getElementById("menu-subtitle").style.display = 'none';
  document.getElementById("menu-title").innerHTML = '의식통합';
  document.getElementById("menu-description").innerHTML = '의식통합지수는 남북한 주민의 의식 통합 수준을 측정한다. 남북한 주민들의 통일에 대한 지향성과 상호 포용성, 사회문화 양식의 동질성 등이 의식 통합의 요인이 될 수 있다. 의식통합지수는 정치, 경제, 사회문화영역으로 나뉘고, 총 배점은 250점이다.';
  document.getElementById("score-title").innerHTML = '의식통합지수 변인과 배점';
  document.getElementById("chart-score").src = './img/score_9_web.svg';
  document.getElementById("chart-score-mobile").srcset = "./img/score_9_mobile.svg";
  const myChart = new Chart(ctx, {
    type: "line",
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 13 }, (_, i) => i + 2008),
      datasets: [
        {
          label: "경제의식",
          data: [
            41.9,	41.3,	40.6,	41.5,	42.5,	40.8,	43.4,	42.6,	39.3,	38.3,	41.2,	45,	41.8
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          },
        {
          label: "정치의식",
          data: [
            40.9,	38.8,	36.3,	35.9,	37.8,	36.6,	37.3,	36.1,	36.9,	36.2,	39.2,	38.9,	36.3
          ],
          borderColor: borderColors[1],
          pointStyle: pointStyle[1],
          backgroundColor: borderColors[1],
          pointBorderColor: borderColors[1],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[1];
          },
          tension: 0,
        },
        {
          label: "사회문화의식",
          data: [
            40.7,	39.4,	47.7,	46.8,	48.5,	47.1,	48.5,	48.8,	45.5,	46.4,	45.6,	45.9,	43.8
          ],
          borderColor: borderColors[2],
          pointStyle: pointStyle[2],
          backgroundColor: borderColors[2],
          pointBorderColor: borderColors[2],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[2];
          },
          tension: 0,
        },
        {
          label: "의식통합",
          data: [
            123.5,	119.5,	124.6,	124.2,	128.8,	124.5,	129.2,	127.5,	121.7,	120.9,	126,	129.8,	121.9
          ],
          borderColor: borderColors[3],
          pointStyle: pointStyle[3],
          backgroundColor: borderColors[3],
          pointBorderColor: borderColors[3],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[3];
          },
          tension: 0,
        },
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
          text: "남북 분야별 의식 통합지수",
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb_index;
            },
          },
          align: 'start',
          padding:{
            top: function(context) {
              if(context.chart.width < mobileScreenSize) return 0;
              else return 50;
            },
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb_index
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            suggestedMin: 0,
            suggestedMax: 150,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 30,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

function fnChart11() {
  deleteChart();

  // const subject = document.getElementById("code");
  // subject.innerHTML = "Skd01)";
  const borderColors = ["#FFFFFF"];
  const borderColorsRGB = [[255, 255, 255]]
  const pointStyle = [totalPointStyle[0]];
  const pointRadiusWeb = [totalPointRadius[0]];

  document.getElementById("menu-subtitle").style.display = 'none';
  document.getElementById("menu-title").innerHTML = '2010~2020년 남북 통합지수 추이';
  document.getElementById("menu-description").innerHTML = '2020년 남북통합지수는 1000점 만점에 180.1 점이다. 남북한의 통합 수준을 백분율로 표시하면 18.0%이다.';
  document.getElementById("score-title").innerHTML = '';
  document.getElementById("chart-score").src = '';
  document.getElementById("chart-score-mobile").srcset = "";
  const myChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    data: {
      labels: Array.from({ length: 11 }, (_, i) => i + 2010),
      datasets: [
        {
          type: 'line',
          label: "통합율(%)",
          data: [
            19.9,	19.4,	19.6,	18.9,	20.5,	20.2,	17.5,	17.3,	23.9,	19.3,	18
          ],
          borderColor: borderColors[0],
          borderWidth: function(context) {
            if(context.chart.width < mobileScreenSize) return borderWidthMobile;
            else return borderWidth;
          },
          pointRadius: function(context) {
            if(context.chart.width < mobileScreenSize) return pointRadiusMobile;
            else return pointRadiusWeb[0];
          },
          tension: 0,
          pointStyle: pointStyle[0],
          backgroundColor: borderColors[0],
          pointBorderColor: borderColors[0],
          yAxisID: 'y',
          datalabels: {
            anchor: 'end',
            offset: 100,
          }
        },
        {
          type: 'bar',
          label: '총점',
          data: [199.3,	193.9,	195.8,	189.4,	204.5,	202.1,	174.8,	172.8,	238.5,	193.1,	180.1],
          backgroundColor: function(context) {
            const chart = context.chart;
            const {
              ctx,
              chartArea
            } = chart;
            if (!chartArea) {
              return null;
            }
            return getGradient(ctx, chartArea, "#7B6D6D", "#230C0C");
          },
          datalabels: {
            anchor: 'end',
          },
          yAxisID: 'y1',
        },
       
      ],
    },
    options: {
      aspectRatio: function(context) {
        if(context.chart.width < mobileScreenSize) return aspectRatioMobile;
        else return aspectRatioWeb;
      },
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
                // myChart.data.datasets[index].pointBorderColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
                // myChart.data.datasets[index].backgroundColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
                // myChart.data.datasets[index].borderColor = `rgba(${borderColorsRGB[index][0]}, ${borderColorsRGB[index][1]}, ${borderColorsRGB[index][2]}, 0.2)`;
              }
            })
            
          } else {
            myChart.data.datasets.forEach((dataset, index) => {
                // myChart.data.datasets[index].borderColor = borderColors[index];
                // myChart.data.datasets[index].backgroundColor = borderColors[index];
                // myChart.data.datasets[index].pointBorderColor = borderColors[index];
            })
            curIndex = -1;
          }
          myChart.update();
      },
      plugins: {
        title: {
          display: false,
          text: ["남한 주민 친근감", "귀하는 남한에 살면서 남한 주민들이 얼마나 친근하게","느껴지십니까?"],
          color: "white",
          font:{
            size: function(context) {
              if(context.chart.width < mobileScreenSize) return titleSizeMobile;
              else return titleSizeWeb;
            },
          },
          align: 'start',
          padding:{
            bottom: function(context) {
              if(context.chart.width < mobileScreenSize) return titleBottomMobile;
              else return titleBottomWeb;
            },
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
            if(context.chart.width < mobileScreenSize){
              return false;
            }
            else {
              return context.datasetIndex === curIndex;
            }
          },
        },
        legend: {
          display: false,
          maxWidth: 300,
          position: function(context) {
            if(context.chart.width < mobileScreenSize) return "bottom";
            else return "right";
          },
          align: "center",
          labels: {
            boxHeight: 0,
            padding: function(context) {
              if(context.chart.width < mobileScreenSize) return legendLabelPaddingMobile;
              else return legendLabelPaddingWeb;
            },
            color: 'white',
            font: {
              size:function(context) {
                if(context.chart.width < mobileScreenSize) return legendFontSizeMobile;
                else return legendFontSizeWeb;
              },
            },
          },
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
            type: 'linear',
            position: 'left',
            suggestedMin: 15,
            suggestedMax: 25,
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 5,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
          y1:
          {
            type: 'linear',
            position: 'right',
            suggestedMin: 0,
            suggestedMax: 250,
            grid:{
              color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#341F1F')),
            },
            ticks: {
              fontSize: 24,
              stepSize: 50,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
        x:
          {
            grid:{
              // color: ['white'].concat(Array.from({ length: 15 }, (_, i) => '#031436'))
            },
            ticks: {
              autoskip: true,
              autoSkipPadding: 50,
              fontSize: 24,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: function(context) {
                  if(context.chart.width < mobileScreenSize) return labelFontSizeMobile;
                  else return labelFontSizeWeb;
                },
              },
              color: 'white',
            },
          },
      },
      
    },
  });
}

fnChart1Uni01();