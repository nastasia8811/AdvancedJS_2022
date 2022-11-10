
const log = async () => {
    const log = await fetch('https://ajax.test-danit.com/api/v2/cards/login', {
        method: 'POST',
        body: JSON.stringify({email: 'nastasia8811@yahoo.com', password: 'ajax'}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const token = await response.text()
    const localStorage = await localStorage.setItem('token', token);

}




// b78f7125-1173-479c-89df-01eb50eda245
export default log;