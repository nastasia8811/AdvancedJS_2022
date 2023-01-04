import {Card} from "../classes/card.js";

export class ChangeCardServer {
    constructor(name, doctor, urgency, purpose, description, date, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.date = date;
        this.id = id;
        this.container = document.createElement('div');
    }

    render() {

        const modalWindow =document.querySelector(".modalWindow");
        const changeCard = document.querySelector(".changeCard");

        modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="PUT">
        <input class="modal_window_doctor" placeholder="Doctor" value=${this.doctor}>
        <input class="modal_window_purpose" placeholder="Purpose" value=${this.purpose}>
        <input class="modal_window_urgency" placeholder="Urgency" value=${this.urgency}>
        <input class="modal_window_name" placeholder="Name" value=${this.name}>
        <input class="modal_window_description" placeholder="Description">
        <input type="date" class="modal_window_date" placeholder="Date">
    </form>`);

        changeCard.addEventListener('click', () => {
             this.name = document.querySelector(".modal_window_name").value;
            this.purpose = document.querySelector(".modal_window_purpose").value;
            this.urgency = document.querySelector(".modal_window_urgency").value;
            this.description = document.querySelector(".modal_window_description").value;
            // this.pressure = document.querySelector(".modal_window_pressure").value;
            // this.mass = document.querySelector(".modal_window_mass").value;
            // this.illness = document.querySelector(".modal_window_illness").value;
            // this.age = document.querySelector(".modal_window_age").value;
            this.date = document.querySelector(".modal_window_date").value;

         fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: `${this.name}`,
                doctor: `${this.doctor}`,
                urgency: `${this.urgency}`,
                purpose: `${this.purpose}`,
                description: `${this.description}`,
                date: `${this.date}`,
                id: `${this.id}`,
            }),

            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(({status}) => {
                if (status === 200) {
                  const containerID = document.getElementById(`#${this.id}`);
                  new Card(this.name, this.doctor, this.urgency, this.purpose, this.description, this.date, this.id).createElements(containerID);
                    containerID.remove();
                }

            })
            .catch(err => console.log(err));
    })
}
}


