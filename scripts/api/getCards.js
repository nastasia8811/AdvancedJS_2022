//Мельник
import {filter} from "../functions/filterFunction.js";

export const getCards =  () => {
if (localStorage.getItem('token')) {
    return fetch('https://ajax.test-danit.com/api/v2/cards', {
        headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
        .then(data => data)
} else {
    document.body.innerHTML = 'PLS LOGIN'
}
}



