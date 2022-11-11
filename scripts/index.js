// import {myLogin} from "./api/myLogin.js";
// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";
 import {myLogin} from "./classes/classLogin.js";

// const header = document.body.querySelector('.header')
// console.log(header)
// header.insertAdjacentHTML('beforeend',`<div class="logo">LOGO</div><button class="button">Вхід</button>` )
// const button = document.body.querySelector('.button')
// button.addEventListener("click", () => {
//
// })

// myLogin()
// getCards()
// createCards()//test


const request = new myLogin(userLogin, userPassword).request();