
import {CreateCardServer} from "./createCardServer.js"

export class CardServerDentist extends CreateCardServer {
    constructor( lastVisit, ...args) {
        super(...args);
        this.lastVisit= lastVisit
    }

    requestCreateCard(){
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.name}`, doctor:`${this.doctor}`, urgency: `${this.urgency}`,
                purpose: `${this.purpose}`, description:`${this.description}`,date:`${this.date}`, age:`${this.lastVisit}`
            }),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
}}