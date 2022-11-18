import Dentist from "../classes/visitDentist.js";
import Cardiologist from "../classes/visitCardiologist";
import Theraphist from "../classes/visitTherapist.js";
import { cardContainer } from "../constanta.js";

const showCards = (cards) => {
  cards.forEach((card) => {
    const { name, doctor, purpose, description, urgency, id } = card;
    switch (doctor) {
      case "Cardiologist":
        const { pressure, bmi, history, age: cardioAge } = card;
        new Cardiologist(pressure, bmi, history, cardioAge, name, doctor, purpose, description, urgency, id).render(cardContainer);
        break;
      case "Dentist":
        const { lastVisit } = card;
        new Dentist(lastVisit, name, doctor, purpose, description, urgency, id).render(cardContainer);
        break;
      case "Therapist":
        const { age } = card;
        new Theraphist(age, name, doctor, purpose, description, urgency, id,).render(cardContainer);
        break;
    }
  });
};
export default showCards;

