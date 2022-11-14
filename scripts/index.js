import {Authorization} from "./classes/classModalAuthorization.js";
import {Modal} from "./classes/modal.js";
import {changeButton} from "./constanta.js";
import {createCards} from "./api/createCard";

const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

changeButton.addEventListener('click', () => {
    new Modal().createElements()
})

//this.doctor, this.data, this.reason, this.priority, this.clientName
new Modal(this.doctor, this.data, this.reason, this.priority, this.clientName).createElements()
