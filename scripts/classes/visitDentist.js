import Visit from "./visit.js";

class Dentist extends Visit{
  constructor(lastVisit, ...args){
    super(...args);
    this.lastVisit = lastVisit;
  }

  createElements(){
    super.createElements();
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend", `<li>Last visit: ${this.lastVisit};</li>`);
    this.cardInfo.prepend(this.containerInsertedInfo);
  }
}

export default Dentist;