import { verification } from "../buscar.js";

export const fieldSelec = document.querySelector('#campBusca');

export const actionTrigger = () => {
    if (fieldSelec.value == "") {
        console.log("Campo vazio!!")
    } else {
        verification();
    }
};