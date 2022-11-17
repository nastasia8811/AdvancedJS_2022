import {Authorization} from "./classes/classModalAuthorization.js";
//import {Modal} from "./classes/modal.js";
import {Modal} from "./classes/1modal.js";
import {bodyContainer, changeButton} from "./constanta.js";
import {filter, renderList} from "./functions/filterFunction.js";
import {Filter} from "./classes/classFilter.js";
//import {createCards} from "./api/createCard.js";

const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

changeButton.addEventListener('click', () => {
    new Modal().createElements()
})

new Filter().filterApear()

