

export class Modal {
    constructor() {
        this.containerModal = document.createElement('div');
        this.selectDoctor = document.createElement('div');
        this.addVisitButton = document.createElement('button');
    }

    createElements() {
        this.containerModal.className = `modalWindow`;
        document.body.append(this.containerModal);
        this.containerModal.append(this.selectDoctor);
        this.containerModal.append(this.addVisitButton);
        this.addVisitButton.classList.add('addVisitButton')
        this.addVisitButton.innerHTML = 'ADD VISIT';
    }

    render(){
this.selectDoctor.insertAdjacentHTML('beforeend', ` <span class="choose">Choose Gender</span>
  
      <div class="dropdown">
        <div class="select">
          <span>Select Gender</span>
          <i class="fa fa-chevron-left"></i>
        </div>
        <input type="hidden" name="gender">
        <ul class="dropdown-menu">
          <li id="cardiologist">Cardiologist</li>
          <li id="dentist">Dentist</li>
          <li id="therapist">Therapist</li>
        </ul>`)

    }
}

