
import { display } from "./calc.js";
import { enterValue } from "./calc.js";
import { unit01 } from "./calc.js";
import { unit02 } from "./calc.js";

export const reset = () => {
    display.innerHTML = '';
    enterValue.value = '';
    unit01.value = '';
    unit02.value = '';
}