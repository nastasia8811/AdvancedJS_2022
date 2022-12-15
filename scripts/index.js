import {Authorization} from "./classes/classModalAuthorization.js";
import {Modal} from "./classes/1modal.js";
import {changeButton} from "./constanta.js";
//import {Card} from "./classes/Card.js";

const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

export let cards = []

changeButton.addEventListener('click', () => {
    new Modal().createElements()
})








