
import {Authorization} from "./classes/classModalAuthorization.js";


// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";




const header = document.body.querySelector('.header')
header.insertAdjacentHTML('beforeend',`<div class="logo">LOGO</div><button class="header_button">Вхід</button>` )
const button = document.body.querySelector('.header_button')
button.addEventListener("click", () => {
   new Authorization().createElements();
})


const bodyContainer = document.body.querySelector('.body_container')
bodyContainer.insertAdjacentHTML('beforeend',`<form class="form" action="#" method="POST">
          <input class="form_item" placeholder="пошук за заголовком/вмістом візиту">
           <input class="form_item" placeholder="пошук за статусом">
            <input class="form_item" placeholder="терміновість візиту">
      </form>`);


// createCards()
