//Мельник
import {Modal} from '../classes/modal.js'
export const createCards = async () => {
    try {
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.clientName}`, doctor:`${this.doctor}`, priority: `${this.priority}`, reason: `${this.reason}`, data: `${this.data}`}),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
    } catch(err){
        console.error(err);
    }
}