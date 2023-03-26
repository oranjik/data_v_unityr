let curChartNum = 1;
let menuNum = 1;

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile-menu").addEventListener("click", function(e){
        if ( document.querySelector('.menu-wrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menu-wrap').classList.remove('on');
            document.querySelector('.icon-hamburger').src="./img/icon-hamburger.png";
            document.querySelector('.mobile-menu').style.backgroundColor =  "rgba( 255, 255, 255, 0 )";

            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
        } else {
            //메뉴펼침
            document.querySelector('.menu-wrap').classList.add('on');
            document.querySelector('.icon-hamburger').src="./img/icon-close.png";
            document.querySelector('.mobile-menu').style.backgroundColor =  "#ffffff";

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            //페이지 스크롤 락 모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });             
        }
    });
});

//페이지 스크롤 락 레이어 클릭 메뉴 닫기
document.querySelector('#dimmed').addEventListener('click', function(e){
    document.querySelector(".mobile-menu").click();
});

const menu1=document.querySelector(".main-menu1");
const subBar1=document.querySelector(".main-menu1>.category_list1");
const menu2=document.querySelector(".main-menu2");
const subBar2=document.querySelector(".main-menu2>.category_list2");

let subToggle1=false;
let subToggle2=false;
function show_sub(subBar, subToggle){
    if(subToggle) {
        subBar.style.height="120px";
        subToggle=!subToggle;
    } else{
        subBar.style.height="0px";
        subToggle=!subToggle;
    }
}

menu1.addEventListener("click", show_sub(subBar1, subToggle1));
menu2.addEventListener("click", show_sub(subBar2, subToggle2));

function changePage(num) {
    document.querySelector(".mobile-menu").click();
    if(num == 1 || num == 2 || num == 3) {
        changeSection(1);
    }
    else {
        changeSection(2);
    }
    changeMenuNum(num);
}

function changeSection(num){
    if(num == 1){
        document.getElementById("section1").src = "./img/header_active_1.png";
        document.getElementById("section2").src = "./img/header_normal_2.png";
        document.getElementById("section1").style.opacity = "100%";
        document.getElementById("section2").style.opacity = "50%";
        document.getElementsByTagName("body").style = "background-color:#001338;";
        document.getElementById("myChart").style = "background-color: #001338; background-size: 100%;";
        document.getElementById("popup-layer-background").style="background-color: #001338; background-size: 100%;"
        document.getElementById("index-menu").style.display = 'none';
        document.getElementById("survey-menu").style.display = 'block';
        document.getElementById("menu-content-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        document.getElementById("arrow-left").style.visibility = "visible";
        document.getElementById("arrow-right").style.visibility = "visible";
        document.getElementById("arrow-bar-container").style.display = "flex";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart1_1_web.png"
            document.getElementById("chart-legend").style ="width: 164px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            
            }
        else {
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_1_mobile.png"
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        } 
        fnChart1Uni01();

    }
    if(num == 2){
        document.getElementById("section1").src = "./img/header_normal_1.png";
        document.getElementById("section2").src = "./img/header_active_2.png";
        document.getElementById("section1").style.opacity = "50%";
        document.getElementById("section2").style.opacity = "100%";
        document.getElementsByTagName("body").style = "background-color:#260A0B;";
        document.getElementById("myChart").style = "background-color: #260A0B; background-size: 100%;";
        document.getElementById("popup-layer-background").style="background-color: #260A0B; background-size: 100%;";
        document.getElementById("index-menu").style.display = 'block';
        document.getElementById("survey-menu").style.display = 'none';
        document.getElementById("menu-content-container").style.display = "block";
        document.getElementById("score-container").style.display = "block"; 
        document.getElementById("arrow-left").style.visibility = "hidden";
        document.getElementById("arrow-right").style.visibility = "hidden";
        document.getElementById("arrow-bar-container").style.display = "none";
        fnChart4();
    }
}

function changeMenuNum(num) {
    menuNum = num;
    curChartNum = 1;
    if(num == 1) {
        fnChart1Uni01();
        document.getElementById("chart-status").innerHTML = "1/10";
        document.getElementById("menu1").src = './img/active_1.png';
        document.getElementById("menu1-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu2").src = './img/normal_2.png';
        document.getElementById("menu2-container").style = 'background-color: none;';
        document.getElementById("menu3").src = './img/normal_3.png';
        document.getElementById("menu3-container").style = 'background-color: none;';
        document.getElementById("chart-status").innerHTML = "1/10";
        document.getElementById("sub-title-1").innerHTML = "통일의식조사";
        document.getElementById("sub-title-2").innerHTML = "남한주민대상";
        if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_1_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_1_mobile.png"
                document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 2) {
        fnChart2Uni01();
        document.getElementById("menu1").src = './img/normal_1.png';
        document.getElementById("menu1-container").style = 'background-color: none;';
        document.getElementById("menu2").src = './img/active_2.png';
        document.getElementById("menu2-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu3").src = './img/normal_3.png';
        document.getElementById("menu3-container").style = 'background-color: none;';
        document.getElementById("chart-status").innerHTML = "1/10";
        document.getElementById("sub-title-1").innerHTML = "통일의식조사";
        document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
        if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_1_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_1_mobile.png"
                document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 3) {
        fnChart3q1_1();
        document.getElementById("menu1").src = './img/normal_1.png';
        document.getElementById("menu1-container").style = 'background-color: none;';
        document.getElementById("menu2").src = './img/normal_2.png';
        document.getElementById("menu2-container").style = 'background-color: none;';
        document.getElementById("menu3").src = './img/active_3.png';
        document.getElementById("menu3-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("chart-status").innerHTML = "1/10";
        document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
        document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
        if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_1_web.png"
                document.getElementById("chart-legend").style = "width: 234px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_1_mobile.png"
                document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 4) {
        fnChart4();
        document.getElementById("menu4").src = './img/active_4.svg';
        document.getElementById("menu4-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu5").src = './img/normal_5.svg';
        document.getElementById("menu5-container").style = 'background-color: none;';
        document.getElementById("menu6-container").style.display = 'none';
        document.getElementById("menu7-container").style.display = 'none';
        document.getElementById("menu8-container").style.display = 'none';
        document.getElementById("menu9").src = './img/normal_9.svg';
        document.getElementById("menu9-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'none';
        document.getElementById("menu11").src = './img/normal_11.svg';
        document.getElementById("menu11-container").style = 'background-color: none;';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart4_web.png"
            document.getElementById("chart-legend").style ="width: 164px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            }
        else {
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart4_mobile.png"
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 5 || num == 6) {
        fnChart6();
        document.getElementById("menu4").src = './img/normal_4.svg';
        document.getElementById("menu4-container").style = 'background-color: none';
        document.getElementById("menu5").src = './img/active_5.svg';
        document.getElementById("menu5-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu6-container").style.display = 'block';
        document.getElementById("menu7-container").style.display = 'block';
        document.getElementById("menu8-container").style.display = 'block';
        document.getElementById("menu6").src = './img/active_6.svg';
        document.getElementById("menu7").src = './img/normal_7.svg';
        document.getElementById("menu8").src = './img/normal_8.svg';
        document.getElementById("menu9").src = './img/normal_9.svg';
        document.getElementById("menu9-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'none';
        document.getElementById("menu11").src = './img/normal_11.svg';
        document.getElementById("menu11-container").style = 'background-color: none;';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart6_web.png"
            document.getElementById("chart-legend").style ="width: 172px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            }
        else {
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart6_mobile.png"
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 7) {
        fnChart7();
        document.getElementById("menu4").src = './img/normal_4.svg';
        document.getElementById("menu4-container").style = 'background-color: none';
        document.getElementById("menu5").src = './img/active_5.svg';
        document.getElementById("menu5-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu6-container").style.display = 'block';
        document.getElementById("menu7-container").style.display = 'block';
        document.getElementById("menu8-container").style.display = 'block';
        document.getElementById("menu6").src = './img/normal_6.svg';
        document.getElementById("menu7").src = './img/active_7.svg';
        document.getElementById("menu8").src = './img/normal_8.svg';
        document.getElementById("menu9").src = './img/normal_9.svg';
        document.getElementById("menu9-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'none';
        document.getElementById("menu11").src = './img/normal_11.svg';
        document.getElementById("menu11-container").style = 'background-color: none;';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart7_web.png"
            document.getElementById("chart-legend").style ="width: 166px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            }
        else {
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart7_mobile.png"
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 8) {
        fnChart8();
        document.getElementById("menu4").src = './img/normal_4.svg';
        document.getElementById("menu4-container").style = 'background-color: none';
        document.getElementById("menu5").src = './img/active_5.svg';
        document.getElementById("menu5-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu6-container").style.display = 'block';
        document.getElementById("menu7-container").style.display = 'block';
        document.getElementById("menu8-container").style.display = 'block';
        document.getElementById("menu6").src = './img/normal_6.svg';
        document.getElementById("menu7").src = './img/normal_7.svg';
        document.getElementById("menu8").src = './img/active_8.svg';
        document.getElementById("menu9").src = './img/normal_9.svg';
        document.getElementById("menu9-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'none';
        document.getElementById("menu11").src = './img/normal_11.svg';
        document.getElementById("menu11-container").style = 'background-color: none;';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart8_web.png"
            document.getElementById("chart-legend").style ="width: 176px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            
            
            }
        else {
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart8_mobile.png"
        }
    }
    if(num == 9 || num == 10) {
        fnChart9();
        document.getElementById("menu4").src = './img/normal_4.svg';
        document.getElementById("menu4-container").style = 'background-color: none';
        document.getElementById("menu5").src = './img/normal_5.svg';
        document.getElementById("menu5-container").style = 'background-color: none';
        document.getElementById("menu6-container").style.display = 'none';
        document.getElementById("menu7-container").style.display = 'none';
        document.getElementById("menu8-container").style.display = 'none';
        document.getElementById("menu9").src = './img/active_9.svg';
        document.getElementById("menu9-container").style = 'background-color: rgba(255, 255, 255,0.1);';
        document.getElementById("menu10").src = './img/active_10.svg';
        document.getElementById("menu10-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'block';
        document.getElementById("menu11").src = './img/normal_11.svg';
        document.getElementById("menu11-container").style = 'background-color: none;';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart9_web.png"
            document.getElementById("chart-legend").style ="width: 163px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
            
            }
        else {
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart9_mobile.png";
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
        }
    }
    if(num == 11) {
        fnChart11();
        document.getElementById("menu4").src = './img/normal_4.svg';
        document.getElementById("menu4-container").style = 'background-color: none';
        document.getElementById("menu5").src = './img/normal_5.svg';
        document.getElementById("menu5-container").style = 'background-color: none';
        document.getElementById("menu6-container").style.display = 'none';
        document.getElementById("menu7-container").style.display = 'none';
        document.getElementById("menu8-container").style.display = 'none';
        document.getElementById("menu9").src = './img/normal_9.svg';
        document.getElementById("menu9-container").style = 'background-color: none;';
        document.getElementById("menu10-container").style.display = 'none';
        document.getElementById("menu11").src = './img/active_11.svg';
        document.getElementById("menu11-container").style = 'background-color:  rgba(255, 255, 255,0.1);';
        document.getElementById("sub-title-1").innerHTML = "남북통합지수";
        document.getElementById("sub-title-2").innerHTML = "";
        if(screen.width > 901) {
            document.getElementById("chart-legend").src = "./img/legend/chart11_web.png"
            document.getElementById("chart-legend").style ="width: 141px; height: auto; padding-top: 20px;";
            document.getElementById("chart-container").style = "flex-direction: row;";
        }
        else {
            document.getElementById("chart-legend").style = "width:300px; padding-top: 20px;"
            document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart11_mobile.png"
        }
    }
}

function fnMoveNextChart(num) {
    if(num == 1) {
        curChartNum += 1;
        if(curChartNum > 10) {
            curChartNum = 1;
        }

        if (curChartNum == 1) {
            fnChart1Uni01();
            document.getElementById("chart-status").innerHTML = "1/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_1_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_1_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
            
        }
        if (curChartNum == 2) {
            fnChart1Uni06();
            document.getElementById("chart-status").innerHTML = "2/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_2_web.png";
                document.getElementById("chart-legend").style = "width: 500px; height: auto; padding-top: 20px;";
                document.getElementById("chart-container").style = "flex-direction: column;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_2_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 3) {
            fnChart1Nk01();
            document.getElementById("chart-status").innerHTML = "3/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_3_web.png"
                document.getElementById("chart-legend").style ="width: 250px; height: auto; padding-top: 100px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_3_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 4) {
            fnChart1Nk03();
            document.getElementById("chart-status").innerHTML = "4/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_4_web.png"
                document.getElementById("chart-legend").style ="width: 167px; height: auto; padding-top: 120px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_4_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 5) {
            fnChart1Nk10()
            document.getElementById("chart-status").innerHTML = "5/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_5_web.png"
                document.getElementById("chart-legend").style ="width: 210px; height: auto; padding-top: 100px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_5_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 6) {
            fnChart1Nkp03();
            document.getElementById("chart-status").innerHTML = "6/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_6_web.png"
                document.getElementById("chart-legend").style ="width: 129px; height: auto; padding-top: 100px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_6_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 7) {
            fnChart1Nkp07_11();
            document.getElementById("chart-status").innerHTML = "7/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_7_web.png"
                document.getElementById("chart-legend").style.width = "152px";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_7_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 8) {
            fnChart1Nkd01_11();
            document.getElementById("chart-status").innerHTML = "8/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_8_web.png"
                document.getElementById("chart-legend").style ="width: 173px; height: auto; padding-top: 120px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_8_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 9) {
            fnChart1Fp01();
            document.getElementById("chart-status").innerHTML = "9/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_9_web.png"
                document.getElementById("chart-legend").style = "width: 148px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_9_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 10) {
            fnChart1Fp02();
            document.getElementById("chart-status").innerHTML = "10/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_10_web.png"
                document.getElementById("chart-legend").style = "width: 148px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_10_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
    }
    if(num == 2){
        curChartNum += 1;
        if(curChartNum > 10) {
            curChartNum = 1;
        }
        if(curChartNum == 1) {
            fnChart2Uni01();
            document.getElementById("chart-status").innerHTML = "1/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_1_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_1_mobile.png"
                document.getElementById("chart-legend").style = "300px";
            }
        }
        if(curChartNum == 2) {
            fnChart2Uni03();
            document.getElementById("chart-status").innerHTML = "2/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_2_web.png"
                document.getElementById("chart-legend").style = "width: 500px; height: auto; padding-top: 20px;"
                document.getElementById("chart-container").style = "flex-direction: column;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_2_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 3) {
            fnChart2Sk01();
            document.getElementById("chart-status").innerHTML = "3/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_3_web.png"
                document.getElementById("chart-legend").style = "width: 238px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_3_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 4) {
            fnChart2Sk03();
            document.getElementById("chart-status").innerHTML = "4/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_4_web.png"
                document.getElementById("chart-legend").style = "width: 210px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_4_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 5) {
            fnChart2Sk06();
            document.getElementById("chart-status").innerHTML = "5/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_5_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_5_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 6) {
            fnChart2Sk07();
            document.getElementById("chart-status").innerHTML = "6/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_6_web.png"
                document.getElementById("chart-legend").style = "width: 164px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_6_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 7) {
            fnChart2Nk02();
            document.getElementById("chart-status").innerHTML = "7/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_7_web.png"
                document.getElementById("chart-legend").style = "width: 118px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_7_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 8) {
            fnChart2Nk07();
            document.getElementById("chart-status").innerHTML = "8/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_8_web.png"
                document.getElementById("chart-legend").style = "width: 149px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_8_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 9) {
            fnChart2Fp01();
            document.getElementById("chart-status").innerHTML = "9/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_9_web.png"
                document.getElementById("chart-legend").style = "width: 134px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_9_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 10) {
            fnChart2Skd01();
            document.getElementById("chart-status").innerHTML = "10/10";
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart2_10_web.png"
                document.getElementById("chart-legend").style = "width: 168px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart2_10_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
    }
    if(num == 3){
        curChartNum += 1;
        if(curChartNum > 10) {
            curChartNum = 1;
        }
        if(curChartNum == 1) {
            fnChart3q1_1();
            document.getElementById("chart-status").innerHTML = "1/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_1_web.png"
                document.getElementById("chart-legend").style = "width: 234px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_1_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 2) {
            fnChart3q1_11();
            document.getElementById("chart-status").innerHTML = "2/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_2_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_2_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 3) {
            fnChart3q1_11_1();
            document.getElementById("chart-status").innerHTML = "3/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_3_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_3_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 4) {
            fnChart3q1_12();
            document.getElementById("chart-status").innerHTML = "4/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_4_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_4_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 5) {
            fnChart3q1_13();
            document.getElementById("chart-status").innerHTML = "5/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_5_web.png"
                document.getElementById("chart-legend").style = "width: 223px; height: auto; padding-top: 140px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_5_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 6) {
            fnChart3q4_1_1();
            document.getElementById("chart-status").innerHTML = "6/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_6_web.png"
                document.getElementById("chart-legend").style = "width: 295px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_6_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 7) {
            fnChart3q8_1();
            document.getElementById("chart-status").innerHTML = "7/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_7_web.png"
                document.getElementById("chart-legend").style = "width: 203px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_7_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 8) {
            fnChart3q12();
            document.getElementById("chart-status").innerHTML = "8/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_8_web.png"
                document.getElementById("chart-legend").style = "width: 235px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_8_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 9) {
            fnChart3q15();
            document.getElementById("chart-status").innerHTML = "9/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_9_web.png"
                document.getElementById("chart-legend").style = "width: 266px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_9_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 10) {
            fnChart3q17();
            document.getElementById("chart-status").innerHTML = "10/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_10_web.png"
                document.getElementById("chart-legend").style = "width: 108px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_10_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
    }

}
function fnMovePrevChart(num) {
    if(num == 1) {
        curChartNum -= 1;
        if(curChartNum < 1) {
            curChartNum = 10;
        }

        if (curChartNum == 1) {
            fnChart1Uni01();
            document.getElementById("chart-status").innerHTML = "1/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_1_web.png"
                document.getElementById("chart-legend").style = "width: 178px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_1_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 2) {
            fnChart1Uni06();
            document.getElementById("chart-status").innerHTML = "2/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_2_web.png"
                document.getElementById("chart-legend").style = "width: 500px; height: auto; padding-top: 20px;"
                document.getElementById("chart-container").style = "flex-direction: column;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_2_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 3) {
            fnChart1Nk01();
            document.getElementById("chart-status").innerHTML = "3/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_3_web.png"
                document.getElementById("chart-legend").style = "width: 250px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_3_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 4) {
            fnChart1Nk03();
            document.getElementById("chart-status").innerHTML = "4/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_4_web.png"
                document.getElementById("chart-legend").style = "width: 167px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_4_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 5) {
            fnChart1Nk10();
            document.getElementById("chart-status").innerHTML = "5/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_5_web.png"
                document.getElementById("chart-legend").style ="width: 210px; height: auto; padding-top: 100px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_5_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 6) {
            fnChart1Nkp03();
            document.getElementById("chart-status").innerHTML = "6/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_6_web.png"
                document.getElementById("chart-legend").style = "width: 129px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_6_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 7) {
            fnChart1Nkp07_11();
            document.getElementById("chart-status").innerHTML = "7/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_7_web.png"
                document.getElementById("chart-legend").style = "width: 152px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_7_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 8) {
            fnChart1Nkd01_11();
            document.getElementById("chart-status").innerHTML = "8/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_8_web.png"
                document.getElementById("chart-legend").style ="width: 173px; height: auto; padding-top: 120px;";
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_8_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 9) {
            fnChart1Fp01();
            document.getElementById("chart-status").innerHTML = "9/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_9_web.png"
                document.getElementById("chart-legend").style = "width: 148px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_9_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if (curChartNum == 10) {
            fnChart1Fp02();
            document.getElementById("chart-status").innerHTML = "10/10"
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "남한주민대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart1_10_web.png"
                document.getElementById("chart-legend").style = "width: 148px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart1_10_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
    }
    if(num == 2){
        curChartNum -= 1;
        if(curChartNum < 1) {
            curChartNum = 10;
        }
        function unitySecond(chartFunction, statusNumber, option, flex = 'row') {
            chartFunction();
            document.getElementById("chart-status").innerHTML = `${statusNumber}/10`;
            document.getElementById("sub-title-1").innerHTML = "통일의식조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = `./img/legend/chart2_${statusNumber}_web.png`
                document.getElementById("chart-legend").style = `width: ${option.width}; height: ${option.height}; padding-top: ${option.padding};`
                document.getElementById("chart-container").style = `flex-direction: ${flex};`;
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = `./img/legend/chart2_${statusNumber}_mobile.png`
                document.getElementById("chart-legend").style = "300px";
            }
        }
        const aa = {
            1: decodeURI,
            2: aa,
        }
        if(curChartNum == 1) {
            unitySecond(fnChart2Uni01, curChartNum, {width: '178px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 2) {
            unitySecond(fnChart2Uni03, curChartNum, {width: '500px', height: 'auto', padding: '20px'}, 'column')
        }
        if(curChartNum == 3) {
            unitySecond(fnChart2Sk01, curChartNum, {width: '238px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 4) {
            unitySecond(fnChart2Sk03, curChartNum, {width: '210px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 5) {
            unitySecond(fnChart2Sk06, curChartNum, {width: '178px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 6) {
            unitySecond(fnChart2Sk07, curChartNum, {width: '164px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 7) {
            unitySecond(fnChart2Nk02, curChartNum, {width: '118px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 8) {
            unitySecond(fnChart2Nk07, curChartNum, {width: '149px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 9) {
            unitySecond(fnChart2Fp01, curChartNum, {width: '134px', height: 'auto', padding: '100px'})
        }
        if(curChartNum == 10) {
            unitySecond(fnChart2Skd01, curChartNum, {width: '168px', height: 'auto', padding: '100px'})
        }
    }
    if(num == 3){
        curChartNum -= 1;
        if(curChartNum < 1) {
            curChartNum = 10;
        }
        if(curChartNum == 1) {
            fnChart3q1_1();
            document.getElementById("chart-status").innerHTML = "1/10";
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_1_web.png"
                document.getElementById("chart-legend").style = "width: 234px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_1_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 2) {
            fnChart3q1_11();
            document.getElementById("chart-status").innerHTML = "2/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_2_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_2_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 3) {
            fnChart3q1_11_1();
            document.getElementById("chart-status").innerHTML = "3/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_3_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_3_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 4) {
            fnChart3q1_12();
            document.getElementById("chart-status").innerHTML = "4/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_4_web.png"
                document.getElementById("chart-legend").style = "width: 123px; height: auto; padding-top: 130px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_4_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 5) {
            fnChart3q1_13();
            document.getElementById("chart-status").innerHTML = "5/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_5_web.png"
                document.getElementById("chart-legend").style = "width: 223px; height: auto; padding-top: 140px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_5_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 6) {
            fnChart3q4_1_1();
            document.getElementById("chart-status").innerHTML = "6/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_6_web.png"
                document.getElementById("chart-legend").style = "width: 295px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_6_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 7) {
            fnChart3q8_1();
            document.getElementById("chart-status").innerHTML = "7/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_7_web.png"
                document.getElementById("chart-legend").style = "width: 203px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_7_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
                }
        }
        if(curChartNum == 8) {
            fnChart3q12();
            document.getElementById("chart-status").innerHTML = "8/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_8_web.png"
                document.getElementById("chart-legend").style = "width: 235px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_8_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 9) {
            fnChart3q15();
            document.getElementById("chart-status").innerHTML = "9/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_9_web.png"
                document.getElementById("chart-legend").style = "width: 266px; height: auto; padding-top: 120px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_9_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
        if(curChartNum == 10) {
            fnChart3q17();
            document.getElementById("chart-status").innerHTML = "10/10"
            document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
            document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
            if(screen.width > 901) {
                document.getElementById("chart-legend").src = "./img/legend/chart3_10_web.png"
                document.getElementById("chart-legend").style = "width: 108px; height: auto; padding-top: 100px;"
                document.getElementById("chart-container").style = "flex-direction: row;";
            }
            else{
                document.getElementById("chart-legend-mobile").srcset = "./img/legend/chart3_10_mobile.png"
                document.getElementById("chart-legend").style.width = "300px";
            }
        }
    }
}
