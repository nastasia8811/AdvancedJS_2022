

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
      //   this.selectDoctor.insertAdjacentHTML('beforeend', ` <span class="choose">Choose Doctor</span>
      // <div class="dropdown">
      //   <div class="select">
      //     <span>Select Doctor</span>
      //     <i class="fa fa-chevron-left"></i>
      //   </div>
      //   <input type="hidden" name="gender">
      //   <ul class="dropdown-menu">
      //     <li id="cardiologist">Cardiologist</li>
      //     <li id="dentist">Dentist</li>
      //     <li id="therapist">Therapist</li>
      //   </ul>`)


        this.selectDoctor.insertAdjacentHTML('beforeend', `  <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Кнопка выпадающего списка
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>`);
    }


}

