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

// let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
// const result = document.getElementById('results')
// renderList(list,result)

export function filter(val,list){
    console.time('test')
    return list.filter(i=>(~i.indexOf(val)))
}
export function renderList(_list=[],el=document.body){
    el.innerHTML='';
    _list.forEach(i=>{
        let new_el = document.createElement('li')
        new_el.innerHTML=i
        el.appendChild(new_el)
    })
    console.timeEnd('test')
}

//document.getElementById('search').addEventListener('input',e=>renderList(filter(e.target.value,list),result))

