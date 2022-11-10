 export const getCards = async () => {
if (localStorage.getItem('token')) {
    fetch('https://ajax.test-danit.com/api/v2/cards', {
        headers: {
            'Content-Type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
} else {
    document.body.innerHTML = 'PLS LOGIN'
}

}

