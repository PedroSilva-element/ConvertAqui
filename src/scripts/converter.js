import { actionTrigger } from "./components/module-seach/trigger.js";
import { listViewmgt } from "./components/module-seach/toView.js";
import { actionCalc } from "./components/calc.js";
import { itensBusca } from "./components/itensBusca/itensSeach.js";
import { reset } from "./components/reset.js";
import { article01 } from "./components/contents/content.js";

const seachUnits = document.querySelector('.trigger');
const botCalc = document.querySelector(".calc");
const redo = document.querySelector(".reset")
const contentArea = document.querySelector(".content-area")

window.onload = function () {
        listViewmgt();
        contentArea.innerHTML = article01();    //Content Theoretical
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

//Reset
redo.addEventListener("click", () => {
 reset();
})