"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
// 1.
let PromoAd = document.querySelectorAll(".promo__adv img").forEach((Elemnt) => Elemnt.remove());

// 2.

let PromoGenre = document.querySelector(".promo__genre").innerText = "драма";

// 3.

let BgImg = document.querySelector(".promo__bg").style.backgroundImage = "url('img/bg.jpg')";

// 4.

function addNewElem(arr) {

  let result = "";
  arr.forEach((elem, index) => {

    result += `<li class="promo__interactive-item">${index + 1}. ${elem}<div class="delete"></div></li>`

  });
  return result;
}

let promoList = document.querySelector(".promo__interactive-list");
let promoChild = addNewElem(movieDB.movies);
promoList.innerHTML = promoChild;
// 5.
