import {InputCardiologist} from "./classInputCardiologist.js";
import {CreateCardServerCardiologist} from "./1createCardServerCardiologist.js";
import {InputTherapist} from "./classInputTherapist.js";
import {CreateCardServerTherapist} from './1createCardServerTherapist.js';
import {InputDentist} from "./classInputDentist.js";
import {CreateCardServerDentist} from './1createCardServerDentist.js';

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
  <button class="dropbtn">Вибрати лікаря</button>
  <div id="myDropdown" class="dropdown-content">
    <a class ='selectCardiologist' href="#">Cardiologist</a>
    <a class ='selectDentist' href="#">Dentist</a>
    <a class ='selectTherapist' href="#">Therapist</a>
  </div>
</div>`)

        const dropbtn = document.querySelector('.dropbtn')
        dropbtn.addEventListener('click', (event) => {
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

        const addVisitButton = document.querySelector('.addVisitButton')
        const selectCardiologist = document.querySelector('.selectCardiologist')
        const selectTherapist = document.querySelector('.selectTherapist')
        const selectDentist = document.querySelector('.selectDentist')

        const selectDoctor = () => {
            const arrDoctors = [selectCardiologist, selectTherapist, selectDentist]
            //TODO при першому кліку інпут не з'являється
            document.getElementById("myDropdown").addEventListener('click', (event) => {
                arrDoctors.forEach((elem) => {
                    elem.addEventListener('click', (event) => {
                        if (elem === selectCardiologist) {
                            new InputCardiologist().inputCreate()
                            addVisitButton.addEventListener('click', () => {
                                new CreateCardServerCardiologist().requestCreateCard()
                            })
                        } else if (elem === selectTherapist) {
                            new InputTherapist().inputCreate()
                            addVisitButton.addEventListener('click', () => {
                                new CreateCardServerTherapist().requestCreateCard()
                            })
                        } else {
                            new InputDentist().inputCreate()

                            addVisitButton.addEventListener('click', () => {
                                new CreateCardServerDentist().requestCreateCard()
                            })
                        }
                    })
                })
            })
        }
        selectDoctor()
    }
}
