
export class CreateCardServer {
    constructor(name, doctor, urgency, purpose, description,date) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.date = date
    }

    requestCreateCard(){
        return fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: `${this.name}`, doctor:`${this.doctor}`, urgency: `${this.urgency}`,
                purpose: `${this.purpose}`, description: `${this.description}`, date: `${this.date}`}),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))

}}