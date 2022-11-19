//Мельник
import {bodyContainer} from "../constanta.js";
import {filter, renderList} from "../functions/filterFunction.js";
import {InputCardiologist} from "./classInputCardiologist";
import {InputTherapist} from "./classInputTherapist";
import {InputDentist} from "./classInputDentist";

export class Filter {
    constructor(arr) {
        this.arr = arr;
    }

    filterApear() {
        bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
<input class="filter_doctor" type="text" id="search_doctor" placeholder="Введіть назву лікаря (Cardiologist, Dentist, Therapist)">
    <ul id="results_filter_doctor">
    </ul>
    <div class="dropdownStatus">
  <button class="dropbtnStatus">Status</button>
  <div id="myDropdownStatus" class="dropdown-content-status">
    <a class ='selectDone' href="#">Done</a>
    <a class ='selectOpen' href="#">Open</a>
  </div>
</div>
<input class="filter_priority" type="text" id="search_priority" placeholder="Введіть терміновість візиту (High, Normal, Low)">
    <ul id="results_filter_priority">
    </ul>
</div>`);

        //-----------------------------------------------------------------

        const dropbtnStatus = document.querySelector('.dropbtnStatus')
        dropbtnStatus.addEventListener('click', (event) => {
            document.getElementById("myDropdownStatus").classList.toggle("show");
            if (!event.target.matches('.dropbtnStatus')) {
                const dropdownContent = document.querySelector(".dropdown-content-status");
                for (let i = 0; i < dropdownContent.length; i++) {
                    const openDropdown = dropdownContent[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        })
        const selectDone = document.querySelector('.selectDone')
        const selectOpen = document.querySelector('.selectOpen')


        //-----------------------------------------------------------------


        let filterDoctor = ['Cardiologist', 'Dentist', 'Therapist']
        let filterStatus = ['Open', 'Done',]
        let filterPriority = ['High', 'Normal', 'Low']
        const doctorInput = document.querySelector('.filter_doctor')
        //const statusInput = document.querySelector('.filter_doctor')
        const resultsFilterDoctor = document.getElementById('results_filter_doctor')
        const resultsFilterStatus = document.getElementById('results_filter_status')
        const resultsFilterPriority = document.getElementById('results_filter_priority')

        renderList(filterDoctor, resultsFilterDoctor)
        renderList(filterStatus, resultsFilterStatus)
        renderList(filterPriority, resultsFilterPriority)
        //-----------------------------------------------------------------
        document.querySelector('.filter_container').addEventListener('input', (event) => {

            let result = this.arr;
            if (event.target === doctorInput && event.target.value !== "") {
                console.log(result.filter(elem => {
                    return elem.doctor.includes(event.target.value)

                }))
            } else if (event.target === dropbtnStatus){
                const arrStatus = [selectDone, selectOpen]
            document.getElementById("myDropdownStatus").addEventListener('click', (event) => {
                arrStatus.forEach((elem) => {
                    elem.addEventListener('click', (event) => {
                        if (elem === selectDone) {

                        } else{

                        }

                        })
                    })
                })
            }

            // if(){}
            // if(){}
        })
        //-----------------------------------------------------------------
        document.getElementById('search_doctor').addEventListener('input', e => renderList(filter(e.target.value, filterDoctor), resultsFilterDoctor))
        document.getElementById('search_status').addEventListener('input', e => renderList(filter(e.target.value, filterStatus), resultsFilterStatus))
        document.getElementById('search_priority').addEventListener('input', e => renderList(filter(e.target.value, filterPriority), resultsFilterPriority))


    }
}