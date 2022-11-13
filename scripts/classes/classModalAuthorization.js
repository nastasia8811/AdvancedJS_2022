//Мельник
import {MyLogin} from "./classLogin.js";
import {getCards} from "../api/getCards.js";
import {headerButton} from "../constanta.js";
//import {Filter} from "./classFilter.js";

//import {DrawCards} from "./classDrawCards.js"

export class Authorization {
    constructor() {
        this.container_login = document.createElement('div');
        this.loginButton = document.createElement("button");
    }

    createElements() {
        this.container_login.insertAdjacentHTML('beforeend', `<form class="form" action="#" method="POST">
        <input class="email_form_item " placeholder="email">
        <input class="password_form_item" placeholder="password">
    </form>`);
        this.container_login.className = `login`;
        document.body.append(this.container_login);
        this.loginButton.innerHTML = "LOGIN";
        this.container_login.append(this.loginButton);
        this.loginButton.addEventListener('click', () => {
            const email = document.querySelector(".email_form_item").value;
            const password = document.querySelector(".password_form_item").value;
            const authorisationResult = new MyLogin(email, password).request();
            authorisationResult.then((token) => {
            if(token === "incorrect email or password" || email ==="" || password ===""){
                return
            }else {
                localStorage.setItem('token', token);
                getCards()
            }
            })
            //             localStorage.getItem('token', token);
                        // this.container_login.remove();
                    // }else {
                    //     document.body.innerText = "Incorrect username or password"
                    // }
            //changeButton()
            // this.loginButton.login();
        })
        //})
    }

    // login() {
    //     // new Filter().apear();
    //     // new DrowCards().createElements();
    // }

}

