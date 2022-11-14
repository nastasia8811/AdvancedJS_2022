//Мельник

import {headerButton, changeButton} from "../constanta.js";

export const changeButtonFunction = () => {
    changeButton.classList.remove('.display_none')
    changeButton.classList.add('active')
    headerButton.remove()
}