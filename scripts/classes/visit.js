class Visit {
  constructor(name, doctor, purpose,description, urgency ,data , id) {
    this.name = name;
    this.doctor = doctor;
    this.purpose = purpose;
    this.urgency = urgency;
    this.id = id;
    this.data = data;
    this.description = description;
    this.container = document.createElement("div");
    this.containerCard = document.createElement("div");
    this.containerName = document.createElement("div");
    this.containerCardBody = document.createElement("div");
    this.cardInfo = document.createElement("div");
    this.containerAddInfo = document.createElement('div');
    this.containerDoctorsInfo = document.createElement("div");
    this.containerInsertedInfo = document.createElement('div');
  }

  createElements() {
    this.container.className ="col-sm-6 col-md-4";
    this.containerCardBody.insertAdjacentHTML('beforeend', `<h2>Card</h2>
    <ul>
    <li>${this.doctor}</li>
    <li><p>Client : ${this.name}</p></li>
    </ul>`
    );
    this.containerCard.className = "card border-info mb-3";
    document.body.append(this.containerCard)
    this.containerCard.setAttribute("style", "max-width: 18rem; margin: 10px;");
    this.containerName.className = "card-header card-header__wrapper";
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend",
    `<p>Visit purpose: ${this.purpose};</p>
    <p>Description: ${this.description};</p>`
    );
    this.containerDoctorsInfo.className = "card";
    this.containerDoctorsInfo.prepend(this.containerCardBody);
    this.containerInsertedInfo.className ="collapse";
    this.containerInsertedInfo.append(this.containerDoctorsInfo);
    this.containerAddInfo.append(this.containerInsertedInfo);

  }

  render(content) {
    this.createElements();
    content.prepend(this.container);
  }

}

export default Visit;

//    <li>${this.purpose}</li>
//     <li>${this.data}</li>
//     <li>${this.urgency}</li>
//     <li>${this.description}</li>