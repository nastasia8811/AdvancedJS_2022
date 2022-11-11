// import {myLogin} from "../api/myLogin";
// import {createCards} from "../api/createCard";
// import {getCards} from "../api/getCards.js";

//
// export class Login {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//         this.container = document.createElement('div');
//         this.loginButton = document.createElement("button");
//     }
//
//     createElements() {
//         this.container.insertAdjacentHTML('beforeend', `<form class="form" action="#" method="POST">
//         <input class="form_item" placeholder="${this.email}">
//         <input class="form_item" placeholder="${this.password}">
//     </form>`);
//         this.container.className = `login`;
//         document.body.append(this.container);
//         this.loginButton.innerHTML = "LOGIN";
//         this.container.append(this.loginButton);
//         this.loginButton.addEventListener("click", () => {
//
//         })
//     }
// }
// new Login (this.email, this.password).createElements()


//
//     request() {
//         return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: this.email,
//                 password: this.password,
//             }),
//         })
//             .then((response) => response.text())
//             .then((token) => {
//                 userToken = token;
//                 userLogin = this.email;
//                 userPs = this.password;
//                 return token;
//             });
//     }
// }
//
// export default Login;
//
