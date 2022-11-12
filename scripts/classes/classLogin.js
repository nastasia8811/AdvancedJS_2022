export class MyLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    request() {

        fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password,
            }),
        }).then(res => {
            console.log(res.text())
        })
            .then(token => {
                    if (token === 200) {
                        localStorage.getItem('token', token)
                    }
                }
            )
    }
}

