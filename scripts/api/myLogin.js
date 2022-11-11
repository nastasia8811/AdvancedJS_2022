export const myLogin = async () => {
    try {
        const login = await fetch('https://ajax.test-danit.com/api/v2/cards/login', {
            method: 'POST',
            body: JSON.stringify({email: 'nastasia8811@yahoo.com', password: 'ajax'}),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.text())
            .then(token => {
                localStorage.setItem('token', token)
            })

    }catch (err){
        console.error(err);
    }
}




// b78f7125-1173-479c-89df-01eb50eda245
