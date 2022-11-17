import {selectDoctor} from "../functions/selectDctor.js";

//import {inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputPressure, inputMass, inputIllness, inputAge} from '../constanta.js'
export class Modal {
    constructor() {
        this.containerModal = document.createElement('div');
        this.selectDoctor = document.createElement('div');
        this.addVisitButton = document.createElement('button');
    }

    createElements() {
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.containerModal.append(this.selectDoctor);
        this.containerModal.append(this.addVisitButton);
        this.addVisitButton.classList.add('addVisitButton')
        this.addVisitButton.innerHTML = 'ADD VISIT';
        this.selectDoctor.insertAdjacentHTML('beforeend', `<div class="dropdown">
  <button class="dropbtn">Выпадающий</button>
  <div id="myDropdown" class="dropdown-content">
    <a class ='selectCardiologist' href="#">Cardiologist</a>
    <a class ='selectDentist' href="#">Dentist</a>
    <a class ='selectTherapist' href="#">Therapist</a>
  </div>
</div>`)

        const dropbtn = document.querySelector('.dropbtn')
        dropbtn.addEventListener('click',(event) => {
            document.getElementById("myDropdown").classList.toggle("show");

            if (!event.target.matches('.dropbtn')) {
                const dropdowns = document.querySelector(".dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        })
        selectDoctor()
}}
