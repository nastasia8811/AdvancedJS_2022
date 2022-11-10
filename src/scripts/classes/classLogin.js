// class Login {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }
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
