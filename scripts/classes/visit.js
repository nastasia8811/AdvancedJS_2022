class Visit {
  constructor(name, doctor, purpose, urgency, description, id) {
    this.name = name;
    this.doctor = doctor;
    this.purpose = purpose;
    this.urgency = urgency;
    this.id = id;
    this.description = description;
    this.containerColumn = document.createElement("div");
    this.containerCard = document.createElement("div");
    this.containerName = document.createElement("div");
    this.containerCardBody = document.createElement("div");
    this.containerDoctorsInfo = document.createElement("div");
  }

  createElements() {
    this.containerCard.insertAdjacentHTML('beforeend', `<p>Card</p>
    <ul>
    <li>${this.doctor}</li>
    <li>${this.name}</li>
    <li><p> Card: ${this.id}</p></li>
    </ul>`
    );
    this.containerCard.className = "card border-primary mb-3";
    document.body.append(this.containerCard)
    this.containerCard.setAttribute("style", "max-width: 18rem;");
    this.containerName.className = "card-header card-header__wrapper";
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend",
    `<p>Visit purpose: ${this.purpose};</p>
    <p>Description: ${this.description};</p>`
    );
    this.containerDoctorsInfo.className("card")
    this.containerDoctorsInfo.prepend(this.containerCard);
  }

  render(content) {
    this.createElements();
    content.prepend(this.containerColumn);
  }

}

export default Visit;
