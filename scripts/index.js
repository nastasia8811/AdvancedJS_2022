import {Authorization} from "./classes/classModalAuthorization.js";
import {header, bodyContainer} from "./constanta.js";
//import {filterCard} from "./functions/filterFunction.js"

// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";

header.insertAdjacentHTML('beforeend',`<div class="logo">LOGO</div><button class="header_button">Вхід</button>`);
const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
   new Authorization().createElements();
})

