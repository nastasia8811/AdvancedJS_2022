import {ChangeCardServer} from "../api/changeCard.js";
import {Modal} from "./modal.js"
export class Card {
    constructor(name, doctor, urgency, purpose, description, date, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.id = id;

        this.date = date;
        this.containerCards = document.createElement('div');
        this.container = document.createElement('div');
        this.changeVisit = document.createElement("button");
        this.deleteButton = document.createElement("button");
        this.buttonShowMore = document.createElement("button");
        this.container.id = id;
        this.container.dataset.urgency = urgency;
        this.container.dataset.date = date;
    }

    createElements(parent= document.body.querySelector('.cards_container')) {
        parent.append(this.container);
        this.container.insertAdjacentHTML('beforeend', `<h1 class="card_name card_row">Patient name: ${this.name}</h1><h3 class="card_doctor card_row">Selected doctor: ${this.doctor}</h3>`);
        this.container.className = `card`;
        this.deleteButton.innerHTML = "X";
        this.deleteButton.className="deleteCard btn btn-outline-danger";
        this.container.append(this.changeVisit);
        this.changeVisit.innerHTML = "Change visit";
        this.changeVisit.className="changeVisit btn btn-outline-success";
        this.container.append(this.deleteButton);
        this.container.append(this.buttonShowMore);
        this.buttonShowMore.innerHTML = "Show more";
        this.buttonShowMore.className="buttonShowMore btn btn-outline-success";
        this.changeVisit.addEventListener("click",() => {
            new Modal( this.name, this.doctor, this.purpose, this.urgency, this.description, this.date, this.id).changeCard()
        })

        this.buttonShowMore.addEventListener("click", () => {
            this.container.insertAdjacentHTML('beforeend', `<h1 class="card_purpose card_row">Purpose: ${this.purpose}</h1><h3 class="card_urgency card_row">Urgency: ${this.urgency}</h3><p class="card_description card_row">Description: ${this.description}</p> <p class="date card_row">Date: ${this.date}</p>`);
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
