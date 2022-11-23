export class Input {
  constructor(name, doctor, purpose, urgency, description) {
    this.name = name;
    this.doctor = doctor;
    this.purpose = purpose;
    this.urgency = urgency;
    this.description = description;
    this.containerDoctorsInfo = document.createElement("div");
    this.containerCard = document.createElement("div");
  }

  inputCreate() {
    const modalWindow =document.querySelector(".modalWindow");

    modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor">
        <input class="modal_window_purpose" placeholder="Purpose">
        <input class="modal_window_urgency" placeholder="Urgency">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_description" placeholder="Description">
    </form>`);

  }
}

