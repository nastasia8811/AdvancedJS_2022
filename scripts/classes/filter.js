
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
            result.forEach((element)=>{
                element.style.display = "none";
            })
            if (doctorInput.value !== "") {
                result = result.filter(elem => {
                    const doctorText = elem.querySelector(".card_doctor").textContent;
                    return doctorText.includes(doctorInput.value);
                })
            }
            if (visitStatus.value !== 'All') {
                result = result.filter(elem => {
                    const filterDate = elem.dataset.date
                    let currentDateMs = new Date(filterDate).getTime()
                    let todayDateMs = new Date().getTime()
                    if (currentDateMs > todayDateMs && visitStatus.value === 'Open') {
                        return true
                    } else if (todayDateMs > currentDateMs && visitStatus.value === 'Done') {
                        return true
                    }
                })
            }
            console.log("filer 2", result)

            const urgencyStatusArr = ['high', 'normal', 'low']

         if (urgencyStatusArr.includes(urgencyStatus.value.toLowerCase()) ) {
             result = result.filter(elem =>{
                 const filterUrg = elem.dataset.urgency;
           return urgencyStatus.value=== filterUrg}

            )

             console.log("filer 3", result)
              }

            result.forEach((element)=>{
                element.style.display = "block";
            })
        })
    }
}


