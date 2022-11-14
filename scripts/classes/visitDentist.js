import Visit from "./visit.js";

class Dentist extends Visit{
  constructor(lastVisit, ...args){
    super(...args);
    this.lastVisit = lastVisit;
  }

  createElements(){
    super.createElements();
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend", `<p>Last visit: ${this.lastVisit};</p>`);
    this.containerDoctorsInfo.prepend(this.containerCard);
  }
}

export default Dentist;