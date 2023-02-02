import {Input} from "./input.js";
import {CardServerDentist} from "./cardServerDentist.js";

export class InputDentist extends Input {
    constructor(lastVisit, ...args) {
        super(...args);
        this.lastVisit = lastVisit;
    }

    inputCreate() {
        const modalWindow = document.querySelector(".modalWindow");
        const addVisitButton = document.querySelector(".addVisitButton");
        modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor" value="Dentist">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_description" placeholder="Description">
        <input id="date" type="date" class="modal_window_date" placeholder="Date">
        <input type="date" class="modal_window_lastVisit" placeholder="lastVisit">
    </form>`);
        addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputLastVisit = document.querySelector(".modal_window_lastVisit").value;
            const inputDate = document.querySelector(".modal_window_date").value;
            new CardServerDentist(inputLastVisit, inputName, inputDoctor, inputUrgency, inputPurpose, inputDescription, inputDate).requestCreateCard()
        })
        addVisitButton.addEventListener('click', ()=> {
            modalWindow.remove()
            alert("Поздравляем, визит к Дантисту создан!")
        })
    }
}
