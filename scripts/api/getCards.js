//Мельник
import {filter} from "../functions/filterFunction.js";

export const getCards = async () => {
if (localStorage.getItem('token')) {
    fetch('https://ajax.test-danit.com/api/v2/cards', {
        headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
} else {
    document.body.innerHTML = 'PLS LOGIN'
}
const filter = (arr) =>{
    return arr.filter((item) =>{
        const valueDoctor = document.getElementById('search_doctor').value
        if (valueDoctor !== "виберіть лікаря"){

        }
    }

)
}
}



