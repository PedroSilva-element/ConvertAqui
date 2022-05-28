

const unit01 = document.querySelector(".de");
const unit02 = document.querySelector(".para");

export const itensBusca = () => {
  const bots = document.querySelectorAll("#colun01");
  const bots02 = document.querySelectorAll("#colun02");

  bots.forEach((n) => {
    let val01 = n.value
    n.addEventListener("click", () => {
      unit01.innerHTML = val01
    });
  });

  bots02.forEach((n2) => {
    let val02 = n2.value
    n2.addEventListener("click", () => {
      unit02.innerHTML = val02
    });
  });

};