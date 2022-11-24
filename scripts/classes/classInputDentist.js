import {Input} from "./classInput.js";
import {CreateCardServerDentist} from "./1createCardServerDentist.js";



export class InputDentist extends Input {
    constructor(lastVisit, ...args) {
        super(...args);
        this.lastVisit = lastVisit;
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
        <input type="date" class="modal_window_date" placeholder="Date">
        <input class="modal_window_lastVisit" placeholder="lastVisit">
    </form>`);
        addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputLastVisit = document.querySelector(".modal_window_lastVisit").value;
            const inputDate = document.querySelector(".modal_window_date").value;
            new CreateCardServerDentist(inputLastVisit, inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputDate).requestCreateCard()


        })
    }
}
