
import {CreateCardServer} from "./1classCreateCardServer.js"

export class CreateCardServerTherapist extends CreateCardServer {
    constructor(age, ...args) {
        super(...args);
        this.age = age;
    }

    requestCreateCard(){
        console.log(this.urgency)
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.name}`, doctor:`${this.doctor}`, urgency: `${this.urgency}`,
                purpose: `${this.purpose}`, description:`${this.description}`, age:`${this.age}`,date: `${this.date}`
            }),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
}}