import {Authorization} from "./classes/classModalAuthorization.js";
import {Modal} from "./classes/modal.js";

const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})

document.body.querySelector('.change_button').addEventListener('click', () => {
    new Modal(this.doctor, this.data, this.reason, this.priority, this.clientName).createElements()
})

