import {Authorization} from "./classes/classModalAuthorization.js";
import {header, bodyContainer} from "./constanta.js";
import {filter, renderList} from "./functions/filterFunction.js"
//import {filterCard} from "./functions/filterFunction.js"

// import {getCards} from "./api/getCards.js";
// import {createCards} from "./api/createCard.js";

header.insertAdjacentHTML('beforeend', `<div class="logo">LOGO</div><button class="header_button">Вхід</button>`);
const headerButton = document.body.querySelector('.header_button')
headerButton.addEventListener("click", () => {
    new Authorization().createElements();
})


// Filter
// bodyContainer.insertAdjacentHTML('beforeend', ` <div class="filter_container">
//  <input type="text" id="myFilter" placeholder="Введіть назву лікаря">
//     <ul id="myUl">
//         <li class="myUl-item"><a href="#">rrr</a></li>
//         <li class="myUl-item"><a href="#">vvv</a></li>
//         <li class="myUl-item"><a href="#">ddd</a></li>
//     </ul>
// </div>`);
//document.querySelector('#myFilter').addEventListener("keydown", filterCard);

bodyContainer.insertAdjacentHTML('beforeend', `<div class="filter_container">
<input class="filter_doctor" type="text" id="search" placeholder="Введіть назву лікаря (Cardiologist, Dentist, Therapist)">
    <ul id="results">
    </ul>
<input class="filter_status" type="text" id="search" placeholder="Введіть cтатус візиту (Open/Done)">
    <ul id="results">
    </ul>
<input class="filter_priority" type="text" id="search" placeholder="Введіть терміновість візиту (High, Normal, Low)">
    <ul id="results">
    </ul>
</div>`);

let list = ['JavaScript', 'Kotlin', 'Rust', 'PHP', 'Ruby', 'Java', 'MarkDown', 'Python', 'C++', 'Fortran', 'Assembler']
const result = document.getElementById('results')
renderList(list, result)

document.getElementById('search').addEventListener('input', e => renderList(filter(e.target.value, list), result))