//Мельник
import {bodyContainer} from "../constanta.js";
//import {filter, renderList} from "../functions/filterFunction.js";
// import {InputCardiologist} from "./classInputCardiologist.js";
// import {InputTherapist} from "./classInputTherapist.js";
// import {InputDentist} from "./classInputDentist.js";

export class Filter {
    constructor(arr) {
        this.arr = arr;
    }

    filterApear() {
        bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
<input class="filter_doctor" type="text" id="search_doctor" placeholder="Введіть назву лікаря (Cardiologist, Dentist, Therapist)">
    <ul id="results_filter_doctor">
    </ul>

<select class="visit_status">
<option value="All">All</option>
<option value="Done">Done</option>
<option value="Open">Open</option>
</select>
                        
<input class="filter_priority" type="text" id="search_priority" placeholder="Введіть терміновість візиту (High, Normal, Low)">
    <ul id="results_filter_priority">
    </ul>
</div>`);

        //-----------------------------------------------------------------

        const doctorInput = document.querySelector('.filter_doctor')
        const visitStatus = document.querySelector('.visit_status')

        //-----------------------------------------------------------------

        document.querySelector('.filter_container').addEventListener('input', (event) => {
            let result = this.arr;
            if (doctorInput.value !== "") {
                result = result.filter(elem => {
                    return elem.doctor.includes(doctorInput.value)

                })
            }

            if (visitStatus.value !== 'All') {
                result = result.filter(elem => {
                    let currentDateMs = new Date(elem.date).getTime()
                    let todayDateMs = new Date().getTime()
                    if(currentDateMs > todayDateMs && visitStatus.value === 'Open'){
            return true
                    }
else if (todayDateMs > currentDateMs && visitStatus.value === 'Done'){
                        return true
                    }
                })
                console.log(result)

                        }
                //     })
                // })
                // } else {
                    // console.log(result.filter(elem => {
                    //     return elem.urgency.includes(event.target.value)
            //     }))
            // }


        })
    }
}