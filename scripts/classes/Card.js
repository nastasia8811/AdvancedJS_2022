export class Card {
    constructor(name, doctor, urgency, purpose, description, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.id = id;
        this.container = document.createElement('div');
        this.deleteButton = document.createElement("button");
        this.buttonShowMore = document.createElement("button");
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', `<h1 class="card_name">${this.name}</h1><h3 class="card_doctor">${this.doctor}</h3><p class="card_buttonShowMore">${this.buttonShowMore}</p>`);
        this.container.className = `card`;
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete card";
        this.container.append(this.deleteButton);
        this.container.append(this.buttonShowMore);
        this.buttonShowMore.innerHTML = "Show more";
        this.buttonShowMore.addEventListener("click", () => {
            this.container.insertAdjacentHTML('beforeend', `<h1 class="card_purpose">${this.purpose}</h1><h3 class="card_urgency">${this.urgency}</h3><p class="card_description">${this.description}</p>`);
        })
        this.deleteButton.addEventListener("click", () => {
            deleteCard(this.id, this.container)
        })
    }
}


const deleteCard = (id, container) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            name: `${this.name}`,
            doctor: `${this.doctor}`,
            urgency: `${this.urgency}`,
            purpose: `${this.purpose}`,
            description: `${this.description}`,
            id: `${this.id}`
        }),
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


// fetch('https://ajax.test-danit.com/api/v2/cards'), {
//     method: "GET",
//     body: JSON.stringify({
//         name: `${this.name}`,
//         doctor: `${this.doctor}`,
//         urgency: `${this.urgency}`,
//         purpose: `${this.purpose}`,
//         description: `${this.description}`,
//         id: `${this.id}`
//     }),
//     headers: {
//         'content-type': 'application/json',
//         "authorization": `Bearer ${localStorage.getItem('token')}`
//     }
// }
//     .then((response) => response.json())
//     .then((cardArr) => {
//         const cardItem = cardArr.filter((card) => card.id === id);
//         cardArr.forEach(({name, doctor, urgency, purpose, description, id}) => {
//             new Card(name, doctor, urgency, purpose, description, id).createElements()
//         })
//         })
