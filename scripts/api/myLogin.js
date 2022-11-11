
export const myLogin =  (emailUser, passwordUser) => {

      fetch('https://ajax.test-danit.com/api/v2/cards/login', {
          method: 'POST',
          body: JSON.stringify({
              email: emailUser,
              password: passwordUser,
          }),
          headers: {
              'Content-Type': 'application/json',
              "Authorization": localStorage.getItem("token")
                  ? `Bearer ${localStorage.getItem("token")}`
                  : undefined
          }

      }).then(res => {
          console.log(res.text())
      }).then(token => {
          localStorage.setItem('token', token)
      })

}





// b78f7125-1173-479c-89df-01eb50eda245
//myLogin()