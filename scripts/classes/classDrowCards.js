let cardsArr = ""

class DrowCards {
    request() {
        return fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userToken}`,
            },
        })
            .then((response) => response.json())
            .then((arr) => {
                cardsArr = arr.filter((element) => {
                    return !!element.doctorType;
                });
                return arr.filter((element) => {
                    return !!element.doctorType;
                });
            });
    }

    render() {
        this.request().then((arr) => {
            if (!arr.length) {
                document.querySelector(".noCardsBox").innerText = "карток не знайдено";
            } else {
                document.querySelector(".noCardsBox").innerText = "";
            }
            arr.forEach((element) => {
                new Card(element).render();
            });
        });
    }
    renderFromArr(arr) {
        if (!arr.length) {
            document.querySelector(".noCardsBox").innerText = "карток не знайдено";
        } else {
            document.querySelector(".noCardsBox").innerText = "";
        }
        document.querySelector("#cardsRoot").innerHTML = "";
        arr.forEach((element) => {
            new Card(element).render();
        });
    }
}