// export class Modal {
//
//     constructor() {
//         this._modalElement = document.createElement('div');
//         this._backgroundContainer = document.createElement('div');
//         this._mainContainer = document.createElement('div');
//         this._contentContainer = document.createElement('div');
//         this._buttonContainer = document.createElement('div');
//         this._closeButton = document.createElement('div');
//     }
//
//     closeModal() {
//         this._modalElement.remove();
//     }
//
//     createElements() {
//         this._closeButton.classList.add('modal__close');
//         this._closeButton.addEventListener('click', this.closeModal.bind(this));
//
//         this._backgroundContainer.classList.add('modal__background');
//         this._backgroundContainer.addEventListener('click', this.closeModal.bind(this));
//
//         this._contentContainer.classList.add('modal__content-wrapper');
//         this._buttonContainer.classList.add('modal__button-wrapper');
//
//         this._mainContainer.classList.add('modal__container');
//         this._mainContainer.append(this._contentContainer);
//         this._mainContainer.append(this._buttonContainer);
//         this._mainContainer.append(this._closeButton);
//
//         this._modalElement.classList.add('modal__window');
//         this._modalElement.append(this._backgroundContainer);
//         this._modalElement.append(this._mainContainer);
//
//     }
//
//     render(container = document.body) {
//         this.createElements();
//         container.append(this._modalElement);
//     }
// }

//import {getCards} from "../api/getCards";
import {createCards} from "../api/createCard.js";


export class Modal {
    constructor(doctor, data, reason, priority, clientName, id) {
        this.doctor = doctor;
        this.data = data;
        this.reason = reason;
        this.priority = priority;
        this.clientName = clientName;
        this.id = id;
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
////////////
        this.addVisitButton.addEventListener('click', () => {
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputReason = document.querySelector(".modal_window_reason").value;
            const inputPriority = document.querySelector(".modal_window_priority").value;
            const inputName = document.querySelector(".modal_window_name").value;
            const inputData = document.querySelector(".modal_window_data").value;
            if (inputDoctor && inputReason && inputPriority && inputName && inputData) {
                createCards(inputName, inputDoctor, inputPriority, inputReason, inputData)
            }
            //const authorisationResult = new MyLogin(email, password).request();
            // authorisationResult.then((token) => {
            //     if (token === "incorrect email or password" || email === "" || password === "") {
            //         return
            //
            //     } else {
            //         localStorage.setItem('token', token);
            //         getCards()
            //         changeButton()
            //         this.container_login.remove();
            //     }
            // })
            /////
        })
    }
}
