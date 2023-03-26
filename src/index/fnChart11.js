function fnChart11() {
    deleteChart();

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
                }
              })
              
            } else {
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