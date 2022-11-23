//TODO написать карточки
export class Visit {
    constructor(name, doctor, purpose, urgency, description, date, id) {
        this.name = name;
        this.doctor = doctor;
        this.purpose = purpose;
        this.urgency = urgency;
        this.description = description;
        this.date = date;
        this.id = id;
        this.drowCardContainer = document.createElement("div");
        this.deleteButton = document.createElement("button");
    }

    createElements() {
        this.drowCardContainer.insertAdjacentHTML('beforeend', ``);
        this.drowCardContainer.className = `drowCardContainer`;
        document.body.append(this.drowCardContainer);
        this.deleteButton.innerHTML = "Delete";
        this.drowCardContainer.append(this.deleteButton);
        this.deleteButton.addEventListener("click", () => {
            deletePost(this.id, this.drowCardContainer)
        })
    }

}

//
// fetch('https://ajax.test-danit.com/api/v2/cards')
//     .then((response) => response.json())
//     .then((cardsArr) => {
//         cardsArr.forEach(({name, doctor, purpose, urgency, description, date, id}) => {
//             fetch('https://ajax.test-danit.com/api/json/posts')
//                 .then((response) => response.json())
//                 .then((userPost) => {
//                     const filterPost = userPost.filter((post) => post.userId === id);
//                     filterPost.forEach(({title, body, id}) => {
//                             new Card(title, body, name, username, email, id).createElements();
//                         }
//                     )
//                 })
//                 .catch((elem) => console.log(elem.message));
//         })
//     })
//     .catch((elem) => console.log(elem.message));
//
// const deletePost = (id, container) => {
//     fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
//         method: "DELETE",
//         headers: {
//             'content-type': 'application/json',
//             "authorization": `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//         .then(({status}) => {
//             if (status === 200) {
//                 container.remove()}
//
//         })
//         .catch(err => console.log(err));
// }
