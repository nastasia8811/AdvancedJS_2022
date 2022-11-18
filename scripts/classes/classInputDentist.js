import {Input} from "./classInput.js";
import {CreateCardServerDentist} from "./1createCardServerDentist.js";
import Dentist from "./visitDentist.js";

export class InputDentist extends Input {
    constructor(lastVisit, ...args) {
        super(...args);
        this.lastVisit = lastVisit;
        // this.containerDoctorsInfo = document.createElement("div");
        // this.containerCard = document.createElement("div");
    }

    inputCreate() {
        const modalWindow = document.querySelector(".modalWindow");
        const addVisitButton = document.querySelector(".addVisitButton");
        modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_description" placeholder="Description">
        <input class="modal_window_lastVisit" placeholder="lastVisit">
    </form>`);
        addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputLastVisit = document.querySelector(".modal_window_lastVisit").value;
            new CreateCardServerDentist(inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputLastVisit).requestCreateCard()
            console.log("CreateCardServerDentist")
            new Dentist(inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputLastVisit).createElements()
            console.log("Dentist")
        })
    }
}
