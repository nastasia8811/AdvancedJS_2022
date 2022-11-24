
import {CreateCardServer} from "./1classCreateCardServer.js"

export class CreateCardServerCardiologist extends CreateCardServer {
    constructor( pressure, mass, illness, age, ...args) {
        super(...args);
        this.pressure = pressure;
        this.mass = mass;
        this.illness = illness;
        this.age = age;
    }

    requestCreateCard(){
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.name}`, doctor:`${this.doctor}`, urgency: `${this.urgency}`,
                purpose: `${this.purpose}`, description:`${this.description}`, date:`${this.date}`, pressure:`${this.pressure}`,
                mass:`${this.mass}`,illness:`${this.illness}`,age:`${this.age}`
            }),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
}}