
import {MyLogin} from "./login.js";
import {getCards} from "../api/getCards.js";
import {changeButtonFunction} from "../functions/changeButton.js";
import {Filter} from "./filter.js";
import {Card} from "./card.js";


export class Authorization {
    constructor() {
        this.container_login = document.createElement("div");
        this.loginButton = document.createElement("button");
    }

    createElements() {
        this.container_login.insertAdjacentHTML('beforeend', `<form class="form" action="#" method="POST">
        <input class="email_form_item " placeholder="email">
        <input class="password_form_item" placeholder="password">
    </form>`);
        this.container_login.className = `login`;
        document.body.append(this.container_login);
        this.loginButton.innerHTML = 'LOGIN';
        this.container_login.append(this.loginButton);
        this.loginButton.className = `loginButton  btn btn-outline-success`;
        this.loginButton.addEventListener('click', () => {
            const email = document.querySelector(".email_form_item").value;
            const password = document.querySelector(".password_form_item").value;
            const authorisationResult = new MyLogin(email, password).request();
            authorisationResult.then((token) => {
                    if( token === "incorrect email or password" || email ==="" || password ===""){
                        return

            }else {
                localStorage.setItem('token', token);

                        getCards().then(data => {
                            data.forEach(({date, doctor,urgency})=>{})
                            new Filter(data).filterApear()
                            //{name, doctor, urgency, purpose, description,date, id}
                            data.map((item)=>{

                                const {name, doctor, urgency, purpose, description,date, id} = item;
                                new Card(name, doctor, urgency, purpose, description,date, id).createElements();
                            })

                })
                changeButtonFunction()
                this.container_login.remove();
            }
            })
        })

    }

}

