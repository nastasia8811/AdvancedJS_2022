import {InputCardiologist} from "./inputCardiologist.js";
import {InputTherapist} from "./inputTherapist.js";
import {InputDentist} from "./inputDentist.js";
import {ChangeCardServer} from "../api/changeCard.js";


export class Modal {
    constructor(name, doctor, purpose, urgency, description, date, id) {
        this.containerModal = document.createElement('div');
        this.selectDoctor = document.createElement('div');
        this.addVisitButton = document.createElement('button');
        this.changeButton = document.createElement('button');
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.date = date;
        this.id= id;
    }

    createElements() {
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.containerModal.append(this.selectDoctor);
        this.addVisitButton.classList.add('addVisitButton');

        this.addVisitButton.classList.add('btn');
        this.addVisitButton.classList.add('btn-success');
        this.addVisitButton.innerHTML = 'ADD VISIT';


        this.selectDoctor.insertAdjacentHTML('beforeend', `<div class="dropdown">
  <button class="dropBtn btn btn-outline-success">Вибрати лікаря</button>
  <div id="myDropdown" class="dropdown-content">
    <a class ='selectCardiologist' href="#">Cardiologist</a>
    <a class ='selectDentist' href="#">Dentist</a>
    <a class ='selectTherapist' href="#">Therapist</a>
  </div>
</div>`)
const showDocList = document.getElementById("myDropdown")
        const dropBtn = document.querySelector('.dropBtn')
        dropBtn.addEventListener('click', (event) => {
            showDocList.classList.toggle("show");
            if (!event.target.matches('.dropBtn')) {
                const dropdowns = document.querySelector(".dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        })

        const selectCardiologist = document.querySelector('.selectCardiologist')
        const selectTherapist = document.querySelector('.selectTherapist')
        const selectDentist = document.querySelector('.selectDentist')

        const selectDoctor = () => {
            const arrDoctors = [selectCardiologist, selectTherapist, selectDentist]
                arrDoctors.forEach((elem) => {
                    elem.addEventListener('click', (event) => {
                        this.containerModal.append(this.addVisitButton);
                        if (elem === selectCardiologist && event.target === selectCardiologist) {
                            new InputCardiologist().inputCreate()
                            showDocList.classList.remove('show');

                        } else if (elem === selectTherapist && event.target === selectTherapist) {
                            new InputTherapist().inputCreate()
                            showDocList.classList.remove('show');

                        } else if (elem === selectDentist && event.target === selectDentist){
                            new InputDentist().inputCreate()
                            showDocList.classList.remove('show');
                        }

                    })
            })
        }
        selectDoctor()
    }
    changeCard(){
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.changeButton.classList.add('changeCard');
        this.containerModal.append(this.changeButton);
        this.changeButton.classList.add('btn');
        this.changeButton.classList.add('btn-success');
        this.changeButton.innerHTML = 'Change VISIT';
        new ChangeCardServer(this.name, this.doctor, this.urgency, this.purpose, this.description, this.date, this.id).render();

    }
}


