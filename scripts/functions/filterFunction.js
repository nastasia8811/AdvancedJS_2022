//Мельник
export function filter(val,filterDoctor){
    //console.time('test')
    return filterDoctor.filter(i=>(~i.indexOf(val)))
}
export function renderList(_filterDoctor=[],el=document.body){
    el.innerHTML='';
    _filterDoctor.forEach(i=>{
        let new_el = document.createElement('li')
        new_el.innerHTML=i
        el.appendChild(new_el)
    })
    //console.timeEnd('test')
}

//import {getCards} from '../api/getCards.js'
// export function filterCard() {
//    console.log("ww")
//    const input = document.querySelector('#myFilter');
//    const filter = input.value.toUpperCase();
//    const myUl = document.querySelector("#myUl");
//    const myFilterItem = myUl.querySelector('.myUl-item');
//
//    for (let i = 0; i < myFilterItem.length; i++) {
// const hhh = document.querySelector("a")
//       const a = myFilterItem[i].hhh[0];
//       const txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//          myFilterItem[i].style.display = "";
//       } else {
//          myFilterItem[i].style.display = "none";
//       }
//    }
// }

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


