//Мельник

import {header, headerButton} from "../constanta.js";

export const changeButton = () => {
    header.insertAdjacentHTML('beforeend', `<button class="change_button">Create visit</button>`);
    headerButton.remove()
}
