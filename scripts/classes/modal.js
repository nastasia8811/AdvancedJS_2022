import {CreateCardServer} from "./classCreateCardServer.js";
import Visit from "./visit.js";

export class Modal {
    constructor() {
        this.containerModal = document.createElement('div');
        this.addVisitButton = document.createElement('button');
    }

    createElements() {
        this.containerModal.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
<!--        <input class="modal_window_data" placeholder="Data">-->
        <input class="modal_window_description" placeholder="Description">
    </form>`);
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.containerModal.append(this.addVisitButton);
        this.addVisitButton.innerHTML = 'ADD VISIT';
        this.addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputData = document.querySelector(".modal_window_data").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            new CreateCardServer(inputName, inputDoctor, inputPurpose, inputUrgency, inputData, inputDescription).requestCreateCard()
            new Visit(inputName, inputDoctor, inputPurpose, inputUrgency, inputData, inputDescription).createElements()

        //
        //     if (inputDoctor === "Cardiologist") {
        //         this.containerModal.insertAdjacentHTML('afterend', `<form class="formModal" action="#" method="POST">
        //     <input class="modal_window_pressure" placeholder="Pressure">
        //     <input class="modal_window_history" placeholder="Cardiovascular History">
        //     <input class="modal_window_cardiologistAge" placeholder="Age">
        // </form>`);
        //     } else if (inputDoctor === "Dentist") {
        //         this.containerModal.insertAdjacentHTML('afterend', `<form class="formModal" action="#" method="POST">
        //     <input class="modal_window_lastVisit" placeholder="Last visit">
        // </form>`);
        //     } else {
        //         this.containerModal.insertAdjacentHTML('afterend', `<form class="formModal" action="#" method="POST">
        //     <input class="modal_window_therapistAge" placeholder="Age">
        // </form>`);
        //     }
        //
        //     const inputPressure = document.querySelector(".modal_window_pressure").value;
        //     const inputHistory = document.querySelector(".modal_window_history").value;
        //     const inputCardiologistAge = document.querySelector(".modal_window_cardiologistAge").value;
        //     const inputLastVisit = document.querySelector(".modal_window_lastVisit").value;
        //     const inputTherapistAge = document.querySelector(".modal_window_therapistAge").value;
        })
     }
}

