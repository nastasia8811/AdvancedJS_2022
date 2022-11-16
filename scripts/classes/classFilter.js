//Мельник
import {bodyContainer} from "../constanta.js";
import {filter, renderList} from "../functions/filterFunction.js";

export class Filter {
    constructor() {
    }
   filterApear(){
        bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
<input class="filter_doctor" type="text" id="search_doctor" placeholder="Введіть назву лікаря (Cardiologist, Dentist, Therapist)">
    <ul id="results_filter_doctor">
    </ul>
<input class="filter_status" type="text" id="search_status" placeholder="Введіть cтатус візиту (Open/Done)">
    <ul id="results_filter_status">
    </ul>
<input class="filter_priority" type="text" id="search_priority" placeholder="Введіть терміновість візиту (High, Normal, Low)">
    <ul id="results_filter_priority">
    </ul>
</div>`);
        let filterDoctor = ['Cardiologist', ', Dentist', 'Therapist']
        let filterStatus = ['Open', 'Done',]
        let filterPriority = ['High', 'Normal', 'Low']

        const resultsFilterDoctor = document.getElementById('results_filter_doctor')
        const resultsFilterStatus = document.getElementById('results_filter_status')
        const resultsFilterPriority = document.getElementById('results_filter_priority')

        renderList(filterDoctor, resultsFilterDoctor)
        renderList(filterStatus, resultsFilterStatus)
        renderList(filterPriority, resultsFilterPriority)

        document.getElementById('search_doctor').addEventListener('input', e => renderList(filter(e.target.value, filterDoctor), resultsFilterDoctor))
        document.getElementById('search_status').addEventListener('input', e => renderList(filter(e.target.value, filterStatus), resultsFilterStatus))
        document.getElementById('search_priority').addEventListener('input', e => renderList(filter(e.target.value, filterPriority), resultsFilterPriority))
    };
}