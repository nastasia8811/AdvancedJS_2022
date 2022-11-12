import {Authorization} from "./classes/classModalAuthorization.js";
//import {header,headerButton, bodyContainer} from "./constanta.js";

// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";

export const header = document.body.querySelector('.header')
export const headerButton = document.body.querySelector('.header_button')
export const bodyContainer = document.body.querySelector('.body_container')

header.insertAdjacentHTML('beforeend',`<div class="logo">LOGO</div><button class="header_button">Вхід</button>`);
headerButton.addEventListener("click", () => {
   new Authorization().createElements();
})


bodyContainer.insertAdjacentHTML('beforeend',`<form class="form" action="#" method="POST">
          <input class="form_item" placeholder="пошук за заголовком/вмістом візиту">
           <input class="form_item" placeholder="пошук за статусом">
            <input class="form_item" placeholder="терміновість візиту">
      </form>`);


