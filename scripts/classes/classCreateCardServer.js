//Мельник
export class CreateCardServer {
    constructor(name, doctor, urgency, purpose, data, description, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.data = data;
        this.urgency = urgency;
        this.description = description;
        this.id = id;
    }

    requestCreateCard(){
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.name}`, doctor:`${this.doctor}`, urgency: `${this.urgency}`, purpose: `${this.purpose}`, data: `${this.data}`, description:`${this.description}`, id:`${this.id}`}),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))

}}