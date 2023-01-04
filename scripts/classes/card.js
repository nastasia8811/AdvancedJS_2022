import {ChangeCardServer} from "../api/changeCard.js";
import {Modal} from "./modal.js"
export class Card {
    constructor(name, doctor, urgency, purpose, description, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.id = id;
        this.container = document.createElement('div');
        this.changeVisit = document.createElement("button");
        this.deleteButton = document.createElement("button");
        this.buttonShowMore = document.createElement("button");

    }

    createElements() {
        document.body.append(this.container);
        this.container.insertAdjacentHTML('beforeend', `<h1 class="card_name">Patient name: ${this.name}</h1><h3 class="card_doctor">Selected doctor: ${this.doctor}</h3>`);
        this.container.className = `card`;
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete card";
        this.container.append(this.changeVisit);
        this.changeVisit.innerHTML = "Change visit";
        this.container.append(this.deleteButton);
        this.container.append(this.buttonShowMore);
        this.buttonShowMore.innerHTML = "Show more";

        this.changeVisit.addEventListener("click",() => {
            new Modal(this.name, this.doctor, this.urgency, this.purpose, this.description, this.id).changeCard()

        })

        this.buttonShowMore.addEventListener("click", () => {
            this.container.insertAdjacentHTML('beforeend', `<h1 class="card_purpose">Purpose: ${this.purpose}</h1><h3 class="card_urgency">Urgency: ${this.urgency}</h3><p class="card_description">Description: ${this.description}</p>`);
        })
        this.deleteButton.addEventListener("click", () => {
            deleteCard(this.id, this.container)
        })

    }
}


const deleteCard = (id, container) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(({status}) => {
            if (status === 200) {
                container.remove()
            }

        })
        .catch(err => console.log(err));
}
