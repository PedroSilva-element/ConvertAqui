import { fieldSelec } from "./module-seach/trigger.js";
import { unidd } from "../database/units.js";

const seachResults = document.querySelector(".seach-results");
const unit01 = document.querySelector(".de");
const unit02 = document.querySelector(".para");


export const verification = () => {

  for (const i in Object.keys(unidd)) {

    if (fieldSelec.value == Object.keys(unidd)[i]) {
      for (const c in Object.values(unidd)) {
        const newUnidd = Object.values(unidd)[i];

        newUnidd.map((item) => {
          seachResults.innerHTML += `
          <button value="${newUnidd}" class="itensUnidd" onclick="validar(${item})">${item}</button> <br>
          `;
        })
        break
      }
    }
  }
};

export const itensBusca = () => {
  const bots = document.querySelector(".itensUnidd");
  bots.addEventListener("click", () => {
    for (const i in Object.keys(unidd)) {
      if (fieldSelec.value == Object.keys(unidd)[i]) {
        for (const c in Object.values(unidd)) {
          const newUnidd02 = Object.values(unidd)[i];

          newUnidd02.map((item) => {
            unit01.innerHTML = item;
          })
        }
      }
    }
  })
};
