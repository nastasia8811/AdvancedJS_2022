// class AuthorizationModal {
//     constructor(container,username, name,) {
//         this.container = document.createElement('div');
//         this.username = username;
//         this.name = name;
//     }
//     apear() {
//         this.container.insertAdjacentHTML('beforeend', `<form class="form" action="#" method="POST">
//         <input class="form_item" placeholder="username" ${this.username}>
//         <input class="form_item" placeholder="name" ${this.name}>
//     </form>`);
//
//         this.container.className = `authorization_form`;
//         document.body.prepend(this.container);
//         // container.innerHTML = document.querySelector("#login-templ").innerHTML;
//         this.container.addEventListener("click", (e) => {
//             if (e.target.id === "authorization_form") {
//                 this.disapear();
//             } else if (e.target.id === "loginBtn") {
//                 let user = {};
//                 this.email = document.querySelector("#userEmailInput").value;
//                 this.password = document.querySelector("#userPasswordInput").value;
//                 let requestLogin = new Login(this.email, this.password).request();
//                 requestLogin.then((data) => {
//                     if (
//                         data === "Incorrect username or password" ||
//                         user.email === "" ||
//                         user.password === ""
//                     ) {
//                     } else {
//                         localStorage.setItem("token", data);
//                         this.disapear();
//                         this.login();
//                     }
//                 });
//             }
//         });
//     }
//     login() {
//         this.changeBtn();
//         new Filter().apear();
//         new DrowCards().render();
//     }
//     changeBtn() {
//         document.querySelector(".header-btn").id = "createCard";
//         document.querySelector(".header-btn").innerText = "Створити картку";
//     }
//     disapear() {
//         document.querySelector(".authorization_form").remove();
//     }
// }
//
// new AuthorizationModal().apear()