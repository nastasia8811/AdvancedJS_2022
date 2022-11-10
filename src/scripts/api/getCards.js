

const getCards = async () => {
    try {
        const {status, data} = await fetch('https://ajax.test-danit.com/api/v2/cards', {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (status === 200) {
            console.log(data);
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default getCards
