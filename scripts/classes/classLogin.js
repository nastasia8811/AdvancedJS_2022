//Мельник
export class MyLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    request() {

        return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password,
            }),
        })
            .then(res => {
                if (res.status === 200){
                    return res.text()

                }else {
                    return "incorrect email or password"
                }

                })

    }
}

