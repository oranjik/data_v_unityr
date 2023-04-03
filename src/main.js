let curChartNum = 1;
let menuNum = 1;

// 햄버거 메뉴 인터랙션
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".mobile-menu").addEventListener("click", function (e) {
    if (document.querySelector(".menu-wrap").classList.contains("on")) {
      //메뉴닫힘
      document.querySelector(".menu-wrap").classList.remove("on");
      document.querySelector(".icon-hamburger").src = "./img/icon-hamburger.png";
      document.querySelector(".mobile-menu").style.backgroundColor = "rgba( 255, 255, 255, 0 )";

      //페이지 스크롤 락 해제
      document.querySelector("#dimmed").remove();
    } else {
      //메뉴펼침
      document.querySelector(".menu-wrap").classList.add("on");
      document.querySelector(".icon-hamburger").src = "./img/icon-close.png";
      document.querySelector(".mobile-menu").style.backgroundColor = "#ffffff";

      //페이지 스크롤 락 레이어 추가
      let div = document.createElement("div");
      div.id = "dimmed";
      document.body.append(div);

      //페이지 스크롤 락 모바일 이벤트 차단
      document.querySelector("#dimmed").addEventListener("scroll touchmove touchend mousewheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }
  });
});

//페이지 스크롤 락 레이어 클릭 메뉴 닫기
document.querySelector("#dimmed").addEventListener("click", function (e) {
  document.querySelector(".mobile-menu").click();
});

const menu1 = document.querySelector(".main-menu1");
const subBar1 = document.querySelector(".main-menu1>.category_list1");
const menu2 = document.querySelector(".main-menu2");
const subBar2 = document.querySelector(".main-menu2>.category_list2");

let subToggle1 = false;
let subToggle2 = false;
function show_sub(subBar, subToggle) {
  if (subToggle) {
    subBar.style.height = "120px";
    subToggle = !subToggle;
  } else {
    subBar.style.height = "0px";
    subToggle = !subToggle;
  }
}

menu1.addEventListener("click", show_sub(subBar1, subToggle1));
menu2.addEventListener("click", show_sub(subBar2, subToggle2));

// 화면 전환에 따른 범례 설정
function setLegend(curMenuNum, statusNum, option = { height: "auto" }, display = "none") {
  if (window.innerWidth > 901) {
    document.getElementById("chart-legend").src = `./img/legend/chart${curMenuNum}_${statusNum}_web.png`;
    document.getElementById(
      "chart-legend"
    ).style = `width: ${option.width}; height: ${option.height}; padding-top: ${option.padding};`;
    document.getElementById("chart-description").style.display = `${display}`;
  } else {
    document.getElementById("chart-legend-mobile").srcset = `./img/legend/chart${curMenuNum}_${statusNum}_mobile.png`;
    document.getElementById("chart-legend").style.width = "300px";
    document.getElementById("chart-description").style.display = `${display}`;
  }
}

// 페이지 전환(모바일용)
function changePage(num) {
  document.querySelector(".mobile-menu").click();
  if (num == 1 || num == 2 || num == 3) {
    changeSection(1);
  } else {
    changeSection(2);
  }
  changeMenuNum(num);
}

// 섹션 전환
function changeSection(num) {
  // 통일의식조사
  if (num == 1) {
    document.getElementById("section1").src = "./img/header_active_1.png";
    document.getElementById("section2").src = "./img/header_normal_2.png";
    document.getElementById("section1").style.opacity = "100%";
    document.getElementById("section2").style.opacity = "50%";
    document.getElementsByTagName("body").style = "background-color:#001338;";
    document.getElementById("myChart").style = "background-color: #001338; background-size: 100%;";
    document.getElementById("popup-layer-background").style = "background-color: #001338; background-size: 100%;";
    document.getElementById("index-menu").style.display = "none";
    document.getElementById("survey-menu").style.display = "block";
    document.getElementById("menu-content-container").style.display = "none";
    document.getElementById("score-container").style.display = "none";
    document.getElementById("arrow-left").style.visibility = "visible";
    document.getElementById("arrow-right").style.visibility = "visible";
    document.getElementById("arrow-bar-container").style.display = "flex";
    setLegend("1", "1", { width: "178px", padding: "100px" });
    fnChart1Uni01();
  }
  // 남북통합지수
  if (num == 2) {
    document.getElementById("section1").src = "./img/header_normal_1.png";
    document.getElementById("section2").src = "./img/header_active_2.png";
    document.getElementById("section1").style.opacity = "50%";
    document.getElementById("section2").style.opacity = "100%";
    document.getElementsByTagName("body").style = "background-color:#260A0B;";
    document.getElementById("myChart").style = "background-color: #260A0B; background-size: 100%;";
    document.getElementById("popup-layer-background").style = "background-color: #260A0B; background-size: 100%;";
    document.getElementById("index-menu").style.display = "block";
    document.getElementById("survey-menu").style.display = "none";
    document.getElementById("menu-content-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("arrow-left").style.visibility = "hidden";
    document.getElementById("arrow-right").style.visibility = "hidden";
    document.getElementById("arrow-bar-container").style.display = "none";
    setLegend("4", "", { width: "164px" });
    fnChart4();
  }
}

// 메뉴 전환
function changeMenuNum(num) {
  menuNum = num;
  curChartNum = 1;

  function initFirstSection() {
    document.getElementById("chart-status").innerHTML = "1/10";
    document.getElementById("menu1").src = "./img/normal_1.png";
    document.getElementById("menu1-container").style = "background-color: none;";
    document.getElementById("menu2").src = "./img/normal_2.png";
    document.getElementById("menu2-container").style = "background-color: none;";
    document.getElementById("menu3").src = "./img/normal_3.png";
    document.getElementById("menu3-container").style = "background-color: none;";
  }
  if (num == 1) {
    fnChart1Uni01();
    initFirstSection();
    document.getElementById("menu1").src = "./img/active_1.png";
    document.getElementById("menu1-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("sub-title-1").innerHTML = "통일의식조사";
    document.getElementById("sub-title-2").innerHTML = "남한주민대상";
    setLegend("1", "1", { width: "178px", padding: "100px" });
  }
  if (num == 2) {
    fnChart2Uni01();
    initFirstSection();
    document.getElementById("menu2").src = "./img/active_2.png";
    document.getElementById("menu2-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("sub-title-1").innerHTML = "통일의식조사";
    document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
    setLegend("2", "1", { width: "178px", padding: "130px" });
  }
  if (num == 3) {
    fnChart3q1_1();
    initFirstSection();
    document.getElementById("menu3").src = "./img/active_3.png";
    document.getElementById("menu3-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
    document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
    setLegend("3", "1", { width: "234px", padding: "100px" });
  }
  function initSecondSection() {
    document.getElementById("menu4").src = "./img/normal_4.svg";
    document.getElementById("menu4-container").style = "background-color: none;";
    document.getElementById("menu5").src = "./img/normal_5.svg";
    document.getElementById("menu5-container").style = "background-color: none;";
    document.getElementById("menu6-container").style.display = "none";
    document.getElementById("menu7-container").style.display = "none";
    document.getElementById("menu8-container").style.display = "none";
    document.getElementById("menu6").src = "./img/normal_6.svg";
    document.getElementById("menu7").src = "./img/normal_7.svg";
    document.getElementById("menu8").src = "./img/normal_8.svg";
    document.getElementById("menu9").src = "./img/normal_9.svg";
    document.getElementById("menu9-container").style = "background-color: none;";
    document.getElementById("menu10-container").style.display = "none";
    document.getElementById("menu11").src = "./img/normal_11.svg";
    document.getElementById("menu11-container").style = "background-color: none;";
    document.getElementById("sub-title-1").innerHTML = "남북통합지수";
    document.getElementById("sub-title-2").innerHTML = "";
  }
  if (num == 4) {
    fnChart4();
    initSecondSection();
    document.getElementById("menu4").src = "./img/active_4.svg";
    document.getElementById("menu4-container").style = "background-color: rgba(255, 255, 255,0.1);";
    setLegend("4", "", { width: "164px" });
  }
  if (num == 5 || num == 6) {
    fnChart6();
    initSecondSection();
    document.getElementById("menu5").src = "./img/active_5.svg";
    document.getElementById("menu5-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("menu6-container").style.display = "block";
    document.getElementById("menu7-container").style.display = "block";
    document.getElementById("menu8-container").style.display = "block";
    document.getElementById("menu6").src = "./img/active_6.svg";
    setLegend("6", "", { width: "172px" });
  }
  if (num == 7) {
    fnChart7();
    initSecondSection();
    document.getElementById("menu5").src = "./img/active_5.svg";
    document.getElementById("menu5-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("menu6-container").style.display = "block";
    document.getElementById("menu7-container").style.display = "block";
    document.getElementById("menu8-container").style.display = "block";
    document.getElementById("menu7").src = "./img/active_7.svg";
    setLegend("7", "", { width: "166px" });
  }
  if (num == 8) {
    fnChart8();
    initSecondSection();
    document.getElementById("menu5").src = "./img/active_5.svg";
    document.getElementById("menu5-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("menu6-container").style.display = "block";
    document.getElementById("menu7-container").style.display = "block";
    document.getElementById("menu8-container").style.display = "block";
    document.getElementById("menu8").src = "./img/active_8.svg";
    setLegend("8", "", { width: "176px" });
  }
  if (num == 9 || num == 10) {
    fnChart9();
    initSecondSection();
    document.getElementById("menu9").src = "./img/active_9.svg";
    document.getElementById("menu9-container").style = "background-color: rgba(255, 255, 255,0.1);";
    document.getElementById("menu10").src = "./img/active_10.svg";
    document.getElementById("menu10-container").style.display = "block";
    setLegend("9", "", { width: "163px" });
  }
  if (num == 11) {
    fnChart11();
    initSecondSection();
    document.getElementById("menu11").src = "./img/active_11.svg";
    document.getElementById("menu11-container").style = "background-color:  rgba(255, 255, 255,0.1);";
    setLegend("11", "", { width: "141px" });
  }
}
// (모바일) 상단 서브타이틀
function setSubTitle(curMenuNum, statusNumber) {
  document.getElementById("chart-status").innerHTML = `${statusNumber}/10`;
  switch (curMenuNum) {
    case 1:
      document.getElementById("sub-title-1").innerHTML = "통일의식조사";
      document.getElementById("sub-title-2").innerHTML = "남한주민대상";
      break;
    case 2:
      document.getElementById("sub-title-1").innerHTML = "통일의식조사";
      document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
      break;
    case 3:
      document.getElementById("sub-title-1").innerHTML = "북한사회변동조사";
      document.getElementById("sub-title-2").innerHTML = "북한이탈주민 대상";
      break;
  }
}
// 남한 주민 대상 통일의식조사 그래프 10개
function showUnityFirst(curChartNum) {
  curMenuNum = 1;
  switch (curChartNum) {
    case 1:
      fnChart1Uni01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "178px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 2:
      fnChart1Uni06();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "250px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 3:
      fnChart1Nk01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "250px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 4:
      fnChart1Nk03();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "167px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 5:
      fnChart1Nk10();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "210px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 6:
      fnChart1Nkp03();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "129px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 7:
      fnChart1Nkp07_11();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "152px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 8:
      fnChart1Nkd01_11();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(
        curMenuNum,
        curChartNum,
        {
          width: "173px",
          height: "auto",
          padding: "120px",
        },
        "block"
      );
      break;
    case 9:
      fnChart1Fp01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "148px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 10:
      fnChart1Fp02();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "148px",
        height: "auto",
        padding: "120px",
      });
      break;
  }
}
// 북한이탈주민 대상 통일의식조사 그래프 10개
function showUnitySecond(curChartNum) {
  curMenuNum = 2;
  switch (curChartNum) {
    case 1:
      fnChart2Uni01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "178px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 2:
      fnChart2Uni03();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, { width: "250px", height: "auto", padding: "120px" });

      break;
    case 3:
      fnChart2Sk01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "238px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 4:
      fnChart2Sk03();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "210px",
        height: "auto",
        padding: "130px",
      });
      break;
    case 5:
      fnChart2Sk06();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "178px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 6:
      fnChart2Sk07();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "164px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 7:
      fnChart2Nk02();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "118px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 8:
      fnChart2Nk07();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "149px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 9:
      fnChart2Fp01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "134px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 10:
      fnChart2Skd01();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "168px",
        height: "auto",
        padding: "120px",
      });
      break;
  }
}
// 북한이탈주민 대상 북한사회변동조사 그래프 10개
function showUnityThird(curChartNum) {
  curMenuNum = 3;
  switch (curChartNum) {
    case 1:
      fnChart3q1_1();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "234px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 2:
      fnChart3q1_11();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "160px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 3:
      fnChart3q1_11_1();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "160px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 4:
      fnChart3q1_12();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "160px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 5:
      fnChart3q1_13();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "223px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 6:
      fnChart3q4_1_1();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "250px",
        height: "auto",
        padding: "130px",
      });
      break;
    case 7:
      fnChart3q8_1();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "203px",
        height: "auto",
        padding: "100px",
      });
      break;
    case 8:
      fnChart3q12();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "235px",
        height: "auto",
        padding: "120px",
      });
      break;
    case 9:
      fnChart3q15();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "240px",
        height: "auto",
        padding: "130px",
      });
      break;
    case 10:
      fnChart3q17();
      setSubTitle(curMenuNum, curChartNum);
      setLegend(curMenuNum, curChartNum, {
        width: "140px",
        height: "auto",
        padding: "130px",
      });
      break;
  }
}
// 통일의식조사 : 오른쪽 화살표
function fnMoveNextChart(num) {
  curChartNum += 1;
  if (curChartNum > 10) {
    curChartNum = 1;
  }
  if (num == 1) {
    showUnityFirst(curChartNum);
  }
  if (num == 2) {
    showUnitySecond(curChartNum);
  }
  if (num == 3) {
    showUnityThird(curChartNum);
  }
}
// 통일의식조사 : 왼쪽 화살표
function fnMovePrevChart(num) {
  curChartNum -= 1;
  if (curChartNum < 1) {
    curChartNum = 10;
  }
  if (num == 1) {
    showUnityFirst(curChartNum);
  }
  if (num == 2) {
    showUnitySecond(curChartNum);
  }
  if (num == 3) {
    showUnityThird(curChartNum);
  }
}
