import {Authorization} from "./classes/classModalAuthorization.js";
import {Modal} from "./classes/1modal.js";
import {bodyContainer, changeButton} from "./constanta.js";
//import {Filter} from "./classes/classFilter.js";


const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

changeButton.addEventListener('click', () => {
    new Modal().createElements()
})

//new Filter().filterApear()

