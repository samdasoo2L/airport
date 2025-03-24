const cardD = document.querySelector(".card-d");
const cardW = document.querySelector(".card-w");
const cardF = document.querySelector(".card-f");
const cardImg = document.querySelector(".card-img");
const cardInfo1 = document.querySelector(".card-info-1");

function cardDEvent() {
  cardD.classList.remove("come");
  cardD.classList.add("hide");
  setTimeout(() => {
    cardD.classList.remove("hide");
    cardD.classList.add("make");
    //데이터교체
    cardImg.src = "data/c.jpg";
    cardInfo1.innerText = "234235435";
  }, 1000);
  setTimeout(() => {
    cardD.classList.remove("make");
    cardD.classList.add("come");
  }, 1500);
}

function cardWEvent() {
  cardW.classList.remove("come");
  cardW.classList.add("hide");
  setTimeout(() => {
    cardW.classList.remove("hide");
    cardW.classList.add("make");
    //데이터교체
    cardImg.src = "data/c.jpg";
    cardInfo1.innerText = "234235435";
  }, 1000);
  setTimeout(() => {
    cardW.classList.remove("make");
    cardW.classList.add("come");
  }, 1500);
}

function cardFEvent() {
  cardF.classList.remove("come");
  cardF.classList.add("hide");
  setTimeout(() => {
    cardF.classList.remove("hide");
    cardF.classList.add("make");
    //데이터교체
    cardImg.src = "data/c.jpg";
    cardInfo1.innerText = "234235435";
  }, 1000);
  setTimeout(() => {
    cardF.classList.remove("make");
    cardF.classList.add("come");
  }, 1500);
}

function cardFunction() {
  // 데이터 가져오는 코드 (비동기 async await)

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
