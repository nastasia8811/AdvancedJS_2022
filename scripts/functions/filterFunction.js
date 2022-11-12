

// Filter
// bodyContainer.insertAdjacentHTML('beforeend',`
// <div class="filter_container">
// <input type="text" id="myFilter"   placeholder="Введіть назву лікаря">
//    <ul id="myUl">
//       <li class="myUl-item"><a href="#">rrr</a></li>
//       <li class="myUl-item"><a href="#">vvv</a></li>
//       <li class="myUl-item"><a href="#">ddd</a></li>
//    </ul>
// </div>`);
// document.querySelector('#myFilter').addEventListener("onkeyup", filterCard);
//
//
// function filterCard() {
//    // Объявлять переменные
//    console.log("ww")
//    const input = document.querySelector('#myFilter');
//    const filter = input.value.toUpperCase();
//    const myUl = document.querySelector("#myUl");
//    const myFilterItem = myUl.querySelector('.myUl-item');
//
//    // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
//    for (let i = 0; i < myFilterItem.length; i++) {
//       const a = myFilterItem[i].querySelector("a")[0];
//       const txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//          myFilterItem[i].style.display = "";
//       } else {
//          myFilterItem[i].style.display = "none";
//       }
//    }
// }
