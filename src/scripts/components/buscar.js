import { fieldSelec } from "./module-seach/trigger.js";
import { unidd } from "../database/units.js";

export const seachResults = document.querySelector(".seach-results");

export const verification = () => {
  for (const i in Object.keys(unidd)) {

    if (fieldSelec.value == Object.keys(unidd)[i]) {
      seachResults.innerHTML = ''
      for (const c in Object.values(unidd)) {
        const newUnidd = Object.values(unidd)[i];

        newUnidd.map((item) => {

          const bot01 = document.createElement("button");
          bot01.setAttribute("value", item);
          bot01.setAttribute("class", "itensUnidd");
          bot01.setAttribute("id", "colun01");
          const textbot = document.createTextNode(item);
          bot01.appendChild(textbot);
          seachResults.appendChild(bot01);

        });
        newUnidd.map((n2) => {

          const bot02 = document.createElement("button");
          bot02.setAttribute("value", n2);
          bot02.setAttribute("class", "itensUnidd");
          bot02.setAttribute("id", "colun02");
          const textbot02 = document.createTextNode(n2);
          bot02.appendChild(textbot02);
          seachResults.appendChild(bot02);

        });
        break
      };
    };
  };
};