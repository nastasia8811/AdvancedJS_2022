//Мельник
export function filter( val, filterDoctor ) {

    return filterDoctor.filter( i => ( ~i.indexOf(val) ) )
}
export function renderList(_filterDoctor = [], el = document.body){
    el.innerHTML = '';
    _filterDoctor.forEach( i => {
        let new_el = document.createElement('li')
        new_el.innerHTML = i
        el.appendChild(new_el)
    })

}



