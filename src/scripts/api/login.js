//import { setCookie } from "../utils/cookieHelpers.js";

let userLogin = "";
const loginUser = async () => {
    const loginFetch = await fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: this.email,
            password: this.password,
        }),
    })
    const token = await response.text()
    return token;
};

export default loginUser;
