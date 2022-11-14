//import {getCards} from "../api/getCards";
//import {createCards} from "../api/createCard.js";


export class Modal {
    constructor() {
        // this.doctor = doctor;
        // this.data = data;
        // this.reason = reason;
        // this.priority = priority;
        // this.clientName = clientName;
        // this.id = id;
        this.containerModal = document.createElement('div');
        this.addVisitButton = document.createElement('button');
    }

    createElements() {
        this.containerModal.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_data" placeholder="Data">
    </form>`);
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.containerModal.append(this.addVisitButton);
        this.addVisitButton.innerHTML = 'ADD VISIT';

        this.addVisitButton.addEventListener('click', () => {
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputReason = document.querySelector(".modal_window_reason").value;
            const inputPriority = document.querySelector(".modal_window_priority").value;
            const inputName = document.querySelector(".modal_window_name").value;
            const inputData = document.querySelector(".modal_window_data").value;
            //пізніше сюди добавлю унікальні інпути для кожного лікаря.
            //при натисканні на кнопку значення value нам потрібно передати в функцію createCard або в клас Visit


            // твій пароль повинен також працювати, тому що ментор буде свої паролі вводити, а не наші


        })
    }
}
