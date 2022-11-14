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
    `<p> Pressure : ${this.pressure}";</p>
    <p> Mass Index : ${this.mass};</p>
    <p>Cardiovascular History: ${this.illness};</p>
    <p><Age: ${this.age};</p>
    `);
    this.containerDoctorsInfo.prepend(this.containerCard);
  }
}

export default Cardiologist;