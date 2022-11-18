export class Input {
  constructor(name, doctor, purpose, urgency, description, id) {
    this.name = name;
    this.doctor = doctor;
    this.purpose = purpose;
    this.urgency = urgency;
    this.id = id;
    this.description = description;
    this.containerCard = document.createElement("div");
  }

  inputCreate() {
    const modalWindow =document.querySelector(".modalWindow");

    modalWindow.insertAdjacentHTML('beforeend', `<form class="formModal" action="#" method="POST">
        <input class="modal_window_doctor" placeholder="Doctor">
        <input class="modal_window_reason" placeholder="Reason">
        <input class="modal_window_priority" placeholder="Priority">
        <input class="modal_window_name" placeholder="Name">
        <input class="modal_window_description" placeholder="Description">
    </form>`);

  }
}
