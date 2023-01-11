
import {bodyContainer} from "../constanta.js";


export class Filter {
    constructor(arr) {
        this.arr = arr;
    }

    filterApear() {
        bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
        <select class="visit_status">
    <option value="All">All</option>
    <option value="Done">Done</option>
    <option value="Open">Open</option>
        </select>
        <input class="filter_doctor" type="text" id="search_doctor" placeholder="Cardiologist, Dentist, Therapist">
    <ul id="results_filter_doctor">
    </ul>
        <input class="filter_priority" type="text" id="search_priority" placeholder="High, Normal, Low">
    <ul id="results_filter_priority">
    </ul>
    </div>`);

        const doctorInput = document.querySelector('.filter_doctor')
        const visitStatus = document.querySelector('.visit_status')
        const urgencyStatus = document.querySelector('.filter_priority')

        document.querySelector('.filter_container').addEventListener('input', (event) => {
            //event.preventDefault()
            document.querySelectorAll(".card");

            let result = [...document.querySelectorAll(".card")];
            if (doctorInput.value !== "") {
                result = result.filter(elem => {
                    const doctorText = elem.querySelector(".card_doctor").textContent;
                    return doctorText.includes(doctorInput.value);
                })
            }
            let resultStatus = this.arr;
            if (visitStatus.value !== 'All') {
                resultStatus = resultStatus.filter(elem => {
                    let currentDateMs = new Date(elem.date).getTime()
                    let todayDateMs = new Date().getTime()
                    if (currentDateMs > todayDateMs && visitStatus.value === 'Open') {
                        return true
                    } else if (todayDateMs > currentDateMs && visitStatus.value === 'Done') {
                        return true
                    }
                })
            }
            const urgencyStatusArr = ['High', 'Normal', 'Low']
         if (urgencyStatusArr.includes(urgencyStatus.value.toLowerCase()) ) {
             resultStatus = resultStatus.filter(elem =>{
           return urgencyStatus.value=== elem.urgency}

            )
             console.log(resultStatus)

              }


        })
    }
}


