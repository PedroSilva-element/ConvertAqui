import { unidd } from "../../database/units.js";

export const campViewmgt = document.querySelector('#campBusca');
const toViewmgt = document.querySelector('#magnitudes');

export const listViewmgt = () => {
    for (let i = 0; i <= Object.keys(unidd).length; i++) {
        const viewNew = Object.keys(unidd);
        toViewmgt.innerHTML  += `<option value="${viewNew[i]}"></option>`;   
    }
};