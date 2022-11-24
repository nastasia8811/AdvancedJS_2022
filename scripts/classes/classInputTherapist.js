import {Input} from "./classInput.js";
import {CreateCardServerTherapist} from "./1createCardServerTherapist.js";



export class InputTherapist extends Input {
    constructor(age, ...args) {
        super(...args);
        this.age = age;
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
        <input class="modal_window_age" placeholder="Age">
    </form>`);
        addVisitButton.addEventListener('click', () => {

            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputAge = document.querySelector(".modal_window_age").value;
            const inputDate = document.querySelector(".modal_window_date").value;
            new CreateCardServerTherapist(inputAge, inputName, inputDoctor, inputUrgency, inputPurpose, inputDescription,inputDate).requestCreateCard()
        })
        addVisitButton.addEventListener('click', ()=> {
            modalWindow.remove()
            alert("Поздравляем, визит к Терапевту создан!")
        })
    }
}
