import Visit from "./visit.js";

class Cardiologist extends Visit{
  constructor(pressure, mass, illnes, age, ...args){
    super(...args);
    this.pressure = pressure;
    this.mass = mass;
    this.illnes = illnes;
    this.age = age;
  }

  createElements(){
    this.containerDoctorsInfo.insertAdjacentHTML("beforeend",
    `<li> Pressure : ${this.pressure}";</li>
    <li> Mass Index : ${this.mass};</li>
    <li>Cardiovascular History: ${this.illness};</li>
    <li><Age: ${this.age};</li>
    `);
    this.cardInfo.prepend(this.containerInsertedInfo);
  }
}

export default Cardiologist;