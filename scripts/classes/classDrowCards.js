// import{deleteCard} from "../functions/deleteCard.js"
//
//
// export class DrawCards {
//     constructor(doctor, data, reason, priority, clientName,id) {
//         this.doctor = doctor;
//         this.data = data;
//         this.reason = reason;
//         this.priority = priority;
//         this.clientName = clientName;
//         this.container = document.createElement('div');
//         this.deleteButton = document.createElement("button");
//         this.id = id;
//     }
//
//     createElements() {
//         this.container.insertAdjacentHTML('beforeend', `<p>${this.doctor}</p>
//                                                                     <ul>
//                                                                     <li>${this.data}</li>
//                                                                     <li>${this.reason}</li>
//                                                                     <li>${this.priority}</li>
//                                                                     <li>${this.clientName}</li>
//                                                                     </ul>`);
//
//         this.container.className = `card`;
//         document.body.append(this.container);
//         this.deleteButton.innerHTML = "Delete";
//         this.container.append(this.deleteButton);
//         this.deleteButton.addEventListener("click", () => {
//             deleteCard(this.id, this.container)
//
//         })
//     }}
