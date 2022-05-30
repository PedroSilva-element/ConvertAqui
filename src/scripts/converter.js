import { actionTrigger } from "./components/module-seach/trigger.js";
import { listViewmgt } from "./components/module-seach/toView.js";
import { actionCalc } from "./components/calc.js";
import { itensBusca } from "./components/itensBusca/itensSeach.js";
//import values from "./database/values.js";
import rules from "./database/rules.js";

const seachUnits = document.querySelector('.trigger');
const botCalc = document.querySelector(".calc");

window.onload = function () {
        listViewmgt();
        console.log(rules());
        
}

//Seach!!
seachUnits.addEventListener("click", () => {
        actionTrigger();
        itensBusca();
});

//Calc
botCalc.addEventListener("click", () => {
        actionCalc()
});