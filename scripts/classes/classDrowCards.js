import deleteCard from "../functions/deleteCard.js"
let cardsArr = ""

export class DrowCards {
    constructor(doctor, data, reason, dropdoun, clientName,id) {
        this.doctor = doctor;
        this.data = data;
        this.reason = reason;
        this.dropdoun = dropdoun;
        this.clientName = clientName;
        this.container = document.createElement('div');
        this.deleteButton = document.createElement("button");
        this.id = id;
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', `<p>${this.doctor}</p>
                                                                    <ul>
                                                                    <li>${this.data}</li>
                                                                    <li>${this.reason}</li>
                                                                    <li>${this.dropdoun}</li>
                                                                    <li>${this.clientName}</li>
                                                                    </ul>`);

        this.container.className = `card`;
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete";
        this.container.append(this.deleteButton);
        this.deleteButton.addEventListener("click", () => {
            deleteCard(this.id, this.container)

        })
    }}
