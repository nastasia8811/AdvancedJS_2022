export class Authorization {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.container = document.createElement('div');
        this.loginButton = document.createElement("button");
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', `<form class="form" action="#" method="POST">
        <input class="form_item" placeholder="email" ${this.email}>
        <input class="form_item" placeholder="password" ${this.password}>
    </form>`);
        this.container.className = `login`;
        document.body.append(this.container);
        this.loginButton.innerHTML = "LOGIN";
        this.container.append(this.loginButton);
        this.container.addEventListener("click", )
    }
}
