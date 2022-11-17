/*Dropdown Menu*/
//import {inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputPressure, inputMass, inputIllness, inputAge} from '../constanta.js'
import Cardiologist from "../classes/1visitCardiologist.js";


export const selectDoctor = ()=>{
const selectCardiologist = document.querySelector('.selectCardiologist')
selectCardiologist.addEventListener('click',(event) => {
    if (!event.target.matches('.selectCardiologist')) {
        new Cardiologist(inputName, inputDoctor, inputPurpose, inputUrgency, inputDescription, inputPressure, inputMass, inputIllness, inputAge).inputCreate()
    }})}
/*End Dropdown Menu*/
