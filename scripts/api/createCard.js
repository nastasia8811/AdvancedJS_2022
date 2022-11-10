//test
export const createCards = async () => {
    try {
        const createCard = await fetch('https://ajax.test-danit.com/api/v2/cards', {
            method: 'POST',
            body: JSON.stringify({name: 'Test'}),
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => console.log(data))
    }catch(err){
        console.error(err);
    }
}