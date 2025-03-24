const cardD = document.querySelector(".card-d");
const cardImgD = document.querySelector(".card-img-d");
const cardInfo1D = document.querySelector(".card-info-1-d");
const cardInfo2D = document.querySelector(".card-info-2-d");

const cardW = document.querySelector(".card-w");
const cardImgW = document.querySelector(".card-img-w");
const cardInfo1W = document.querySelector(".card-info-1-w");
const cardInfo2W = document.querySelector(".card-info-2-w");

const cardF = document.querySelector(".card-f");
const cardImgF = document.querySelector(".card-img-f");
const cardInfo1F = document.querySelector(".card-info-1-f");
const cardInfo2F = document.querySelector(".card-info-2-f");

// let dData = [];
let dDataL = 0;
let dDataN = 0;
// let wData = [];
let wDataL = 0;
let wDataN = 0;
// let fData = [];
let fDataL = 0;
let fDataN = 0;

function cardDEvent() {
  if (dDataL == 0) {
    dDataL = dData.length;
  } else {
    dDataN++;
    if (dDataN == dDataL) {
      dDataN = 0;
    }
  }
  cardD.classList.remove("come");
  cardD.classList.add("hide");
  setTimeout(() => {
    cardD.classList.remove("hide");
    cardD.classList.add("make");
    //데이터교체
    cardImgD.src = dData[dDataN].pic;
    cardInfo1D.innerText = dData[dDataN].title;
    cardInfo2D.innerText = dData[dDataN].sub;
  }, 1000);
  setTimeout(() => {
    cardD.classList.remove("make");
    cardD.classList.add("come");
  }, 1500);
}

function cardWEvent() {
  if (wDataL == 0) {
    wDataL = wData.length;
  } else {
    wDataN++;
    if (wDataN == wDataL) {
      wDataN = 0;
    }
  }
  cardW.classList.remove("come");
  cardW.classList.add("hide");
  setTimeout(() => {
    cardW.classList.remove("hide");
    cardW.classList.add("make");
    //데이터교체
    cardImgW.src = wData[wDataN].pic;
    cardInfo1W.innerText = wData[wDataN].title;
    cardInfo2W.innerText = wData[wDataN].sub;
  }, 1000);
  setTimeout(() => {
    cardW.classList.remove("make");
    cardW.classList.add("come");
  }, 1500);
}

function cardFEvent() {
  if (fDataL == 0) {
    fDataL = fData.length;
  } else {
    fDataN++;
    if (fDataN == fDataL) {
      fDataN = 0;
    }
  }
  cardF.classList.remove("come");
  cardF.classList.add("hide");
  setTimeout(() => {
    cardF.classList.remove("hide");
    cardF.classList.add("make");
    //데이터교체
    cardImgF.src = fData[fDataN].pic;
    cardInfo1F.innerText = fData[fDataN].title;
    cardInfo2F.innerText = fData[fDataN].sub;
  }, 1000);
  setTimeout(() => {
    cardF.classList.remove("make");
    cardF.classList.add("come");
  }, 1500);
}

function cardFunction() {
  // 데이터 가져오는 코드 (비동기 async await)
  // dData =
  // wData =
  // fData =

  setTimeout(() => {
    setInterval(cardDEvent, 10000);
  }, 1000);
  setTimeout(() => {
    setInterval(cardWEvent, 10000);
  }, 1500);
  setTimeout(() => {
    setInterval(cardFEvent, 10000);
  }, 2000);
}

// 시차를 두는 코드(settimeout), 그안에 setinterval 10초마다
// 처음 한번 실행
cardFunction();
