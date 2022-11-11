// import DrowCards from "../classes/classDrowCards.js"
//
// export const getCard = async () => {
//     if (localStorage.getItem('token')) {
//         fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
//             .then(res => res.json())
//             .then(userCards =>{
//         const filterCard = userCards.filter((card) => card.id === id);
//         filterCard.forEach(({doctor, data, reason,priority,clientName,id}) => {
//             new DrowCards(doctor, data, reason,priority,clientName,id).createElements();
//         })})
//
//     } else {
//         document.body.innerHTML = 'PLS LOGIN'
//     }
//
// }
