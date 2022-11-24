import {InputCardiologist} from "./classInputCardiologist.js";
import {InputTherapist} from "./classInputTherapist.js";
import {InputDentist} from "./classInputDentist.js";


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

        this.addVisitButton.classList.add('addVisitButton');
        this.addVisitButton.classList.add('btn');
        this.addVisitButton.classList.add('btn-success');
        this.addVisitButton.innerHTML = 'ADD VISIT';


        this.selectDoctor.insertAdjacentHTML('beforeend', `<div class="dropdown">
  <button class="dropbtn btn btn-outline-success">Вибрати лікаря</button>
  <div id="myDropdown" class="dropdown-content">
    <a class ='selectCardiologist' href="#">Cardiologist</a>
    <a class ='selectDentist' href="#">Dentist</a>
    <a class ='selectTherapist' href="#">Therapist</a>
  </div>
</div>`)
const showDocList = document.getElementById("myDropdown")
        const dropbtn = document.querySelector('.dropbtn')
        dropbtn.addEventListener('click', (event) => {
            showDocList.classList.toggle("show");
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

        const selectCardiologist = document.querySelector('.selectCardiologist')
        const selectTherapist = document.querySelector('.selectTherapist')
        const selectDentist = document.querySelector('.selectDentist')

        const selectDoctor = () => {
            const arrDoctors = [selectCardiologist, selectTherapist, selectDentist]
            //TODO при першому кліку інпут не з'являється

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
}


