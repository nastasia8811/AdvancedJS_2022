import {Visit} from "./1visit.js";
//import {CreateCardServer} from "./classCreateCardServer";
import {CreateCardServerCardiologist} from "./1createCardServerCardiologist.js";

class Cardiologist extends Visit {
    constructor(pressure, mass, illness, age, ...args) {
        super(...args);
        this.pressure = pressure;
        this.mass = mass;
        this.illness = illness;
        this.age = age;
        this.containerDoctorsInfo = document.createElement("div");
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
        <input class="modal_window_pressure" placeholder="Pressure">
        <input class="modal_window_mass" placeholder="Mass">
        <input class="modal_window_illness" placeholder="Illness">
        <input class="modal_window_age" placeholder="Age">
    </form>`);
        addVisitButton.addEventListener('click', () => {
            const inputName = document.querySelector(".modal_window_name").value;
            const inputDoctor = document.querySelector(".modal_window_doctor").value;
            const inputPurpose = document.querySelector(".modal_window_reason").value;
            const inputUrgency = document.querySelector(".modal_window_priority").value;
            const inputDescription = document.querySelector(".modal_window_description").value;
            const inputPressure = document.querySelector(".modal_window_pressure").value;
            const inputMass = document.querySelector(".modal_window_mass").value;
            const inputIllness = document.querySelector(".modal_window_illness").value;
            const inputAge = document.querySelector(".modal_window_age").value;

            new CreateCardServerCardiologist(inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputPressure, inputMass, inputIllness, inputAge).requestCreateCard()
        })

    }

    createElements() {
        this.containerDoctorsInfo.insertAdjacentHTML("beforeend",
            `<p> Pressure : ${this.pressure}";</p>
    <p> Mass Index : ${this.mass};</p>
    <p>Cardiovascular History: ${this.illness};</p>
    <p><Age: ${this.age};</p>
    `);
        this.containerDoctorsInfo.prepend(this.containerCard);
    }
}

export default Cardiologist;