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
        this.container.insertAdjacentHTML('beforeend', `<h1 class="card_name">${this.name}</h1><h3 class="card_name">${this.doctor}</h3><p class="card_buttonShowMore">${this.buttonShowMore}</p>`);
        this.container.className = `card`;
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete card";
        this.container.append(this.deleteButton);
        this.container.append(this.buttonShowMore);
        this.deleteButton.addEventListener("click", () => {
            deleteCard(this.id, this.container )
        })
    }
}






/*fetch('https://ajax.test-danit.com/api/json/users')
    .then((response) => response.json())
    .then((usersArr) => {
        usersArr.forEach(({name, username, email, id, userId}) => {
            fetch('https://ajax.test-danit.com/api/json/posts')
                .then((response) => response.json())
                .then((userPost) => {
                    const filterPost = userPost.filter((post) => post.userId === id);
                    filterPost.forEach(({title, body, id}) => {
                            new Card(title, body, name, username, email, id).createElements();
                        }
                    )
                })
                .catch((elem) => console.log(elem.message));
        })
    })
    .catch((elem) => console.log(elem.message));*/

const deleteCard = (id, container) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: "DELETE"
    })
        .then(({status}) => {
            if (status === 200) {
                container.remove()}

        })
        .catch(err => console.log(err));
}
