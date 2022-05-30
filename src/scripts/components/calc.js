//import values from "../database/values";

const display = document.querySelector(".tela");
const unit01 = document.querySelector(".de");
const unit02 = document.querySelector(".para");


export const actionCalc = () => {
  if (unit01.value == "" || unit02.value == "") {
    display.innerHTML = "Dados inválidos!!"
  } else {
    if (unit01.value > unit02.value) {
      display.innerHTML = `A unidade maior é:  ${unit01.value}`
    }
    if (unit02.value > unit01.value) {
      display.innerHTML = `A unidade maior é:  ${unit02.value}`
      
    }{
    }
  }
};
















































/*
function calcular () {
    if (
      campo.value == '' ||
      campo.value < 1 ||
      de.value == '' ||
      para.value == ''
    ) {
      alert('Dados inválidos!!')
    }
    // Distância
    if (de.value == 'M/s' && para.value == 'Km/h') {
      display.innerHTML = `${campo.value * 3.6} Km/h`
    } else if (de.value == 'Km/h' && para.value == 'M/s') {
      display.innerHTML = `${campo.value / 3.6} M/s`
    }
    //Massa
    if (de.value == 'g' && para.value == 'Kg') {
      display.innerHTML = `${campo.value / 1000} Kg`
    } else if (de.value == 'Kg' && para.value == 'g') {
      display.innerHTML = `${campo.value * 1000} g`
    }
  
    if (de.value == 'g' && para.value == 'Hg') {
      display.innerHTML = `${campo.value / 100} Hg`
    } else if (de.value == 'Hg' && para.value == 'g') {
      display.innerHTML = `${campo.value * 100} g`
    }
  
    if (de.value == 'g' && para.value == 'Dag') {
      display.innerHTML = `${campo.value / 10} Dag`
    } else if (de.value == 'Dag' && para.value == 'g') {
      display.innerHTML = `${campo.value * 10} g`
    }
  
    if (de.value == 'g' && para.value == 'Dg') {
      display.innerHTML = `${campo.value / 10} Dg`
    } else if (de.value == 'Dg' && para.value == 'g') {
      display.innerHTML = `${campo.value * 10} g`
    }
  
    if (de.value == 'g' && para.value == 'Cg') {
      display.innerHTML = `${campo.value / 100} Cg`
    } else if (de.value == 'Cg' && para.value == 'g') {
      display.innerHTML = `${campo.value * 100} g`
    }
  
    if (de.value == 'g' && para.value == 'Mg') {
      display.innerHTML = `${campo.value / 1000} Mg`
    } else if (de.value == 'Mg' && para.value == 'g') {
      display.innerHTML = `${campo.value * 1000} g`
    }
    //Tempo
    if (de.value == 'H' && para.value == 'Min') {
      display.innerHTML = `${campo.value * 60} Min`
    } else if (de.value == 'Min' && para.value == 'H') {
      display.innerHTML = `${campo.value / 60} H`
    } else if (de.value == 'H' && para.value == 'Seg') {
      display.innerHTML = `${campo.value * 120} s`
    } else if (de.value == 'Seg' && para.value == 'H') {
      display.innerHTML = `${campo.value / 120} H`
    } else if (de.value == 'Seg' && para.value == 'Min') {
      display.innerHTML = `${campo.value / 60} Min`
    } else if (de.value == 'Min' && para.value == 'Seg') {
      display.innerHTML = `${campo.value * 60} s`
    }
    //Temperatura
    if (de.value == 'C°' && para.value == 'F°') {
      display.innerHTML = `${(campo.value * 9) / 5 + 32} F°`
    } else if (de.value == 'F°' && para.value == 'C°') {
      display.innerHTML = `${((campo.value - 32) * 5) / 9} C°`
    } else if (de.value == 'C°' && para.value == 'K°') {
      display.innerHTML = `${campo.value + 273.15} K°`
    } else if (de.value == 'K°' && para.value == 'C°') {
      display.innerHTML = `${campo.value - 273.15} C°`
    } else if (de.value == 'F°' && para.value == 'K°') {
      display.innerHTML = `${9 / 5(campo.value - 273) + 32}`
    } else if (de.value == 'K°' && para.value == 'F°') {
      display.innerHTML = `${((campo.value - 273.15) * 9) / 5 + 32}`
    }
    //Comprimento
    if (de.value == 'm' && para.value == 'Km') {
      display.innerHTML = `${campo.value / 1000} Km`
    } else if (de.value == 'Km' && para.value == 'm') {
      display.innerHTML = `${campo.value * 1000} M`
    }
  
    if (de.value == 'm' && para.value == 'Hm') {
      display.innerHTML = `${campo.value / 100} Hm`
    } else if (de.value == 'Hm' && para.value == 'm') {
      display.innerHTML = `${campo.value * 100} M`
    }
  
    if (de.value == 'm' && para.value == 'Dam') {
      display.innerHTML = `${campo.value / 10} Dam`
    } else if (de.value == 'Dam' && para.value == 'm') {
      display.innerHTML = `${campo.value * 10} M`
    }
  
    if (de.value == 'm' && para.value == 'Dm') {
      display.innerHTML = `${campo.value / 10} Dm`
    } else if (de.value == 'Dm' && para.value == 'm') {
      display.innerHTML = `${campo.value * 10} M`
    }
  
    if (de.value == 'm' && para.value == 'Cm') {
      display.innerHTML = `${campo.value / 100} Cm`
    } else if (de.value == 'Cm' && para.value == 'm') {
      display.innerHTML = `${campo.value * 100} M`
    }
  
    if (de.value == 'm' && para.value == 'mm') {
      display.innerHTML = `${campo.value / 1000} mm`
    } else if (de.value == 'mm' && para.value == 'm') {
      display.innerHTML = `${campo.value * 1000} M`
    }
    //Volume
    if (de.value == 'm³' && para.value == 'Km³') {
      display.innerHTML = `${campo.value / 1000 ** 3} Km³`
    } else if (de.value == 'Km³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000 ** 3} M³`
    }
  
    if (de.value == 'm³' && para.value == 'Hm³') {
      display.innerHTML = `${campo.value / 1000 ** 2} Hm³`
    } else if (de.value == 'Hm³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000 ** 2} M³`
    }
  
    if (de.value == 'm³' && para.value == 'Dam³') {
      display.innerHTML = `${campo.value / 1000} Dam³`
    } else if (de.value == 'Dam³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000} M³`
    }
  
    if (de.value == 'm³' && para.value == 'Dm³') {
      display.innerHTML = `${campo.value / 1000} Dm³`
    } else if (de.value == 'Dm³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000} M³`
    }
  
    if (de.value == 'm³' && para.value == 'Cm³') {
      display.innerHTML = `${campo.value / 1000 ** 2} Cm³`
    } else if (de.value == 'Cm³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000 ** 2} M³`
    }
  
    if (de.value == 'm³' && para.value == 'mm³') {
      display.innerHTML = `${campo.value / 1000 ** 3} Mm³`
    } else if (de.value == 'mm³' && para.value == 'm³') {
      display.innerHTML = `${campo.value * 1000 ** 3} M³`
    }
    //Área
    if (de.value == 'm²' && para.value == 'Km²') {
      display.innerHTML = `${campo.value / 100 ** 3} Km²`
    } else if (de.value == 'Km²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100 ** 3} M²`
    }
  
    if (de.value == 'm²' && para.value == 'Hm²') {
      display.innerHTML = `${campo.value / 100 ** 2} Hm²`
    } else if (de.value == 'Hm²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100 ** 2} M²`
    }
  
    if (de.value == 'm²' && para.value == 'Dam²') {
      display.innerHTML = `${campo.value / 100} Dam²`
    } else if (de.value == 'Dam²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100} M²`
    }
  
    if (de.value == 'm²' && para.value == 'Dm²') {
      display.innerHTML = `${campo.value / 100} Dm²`
    } else if (de.value == 'Dm²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100} M²`
    }
  
    if (de.value == 'm²' && para.value == 'Cm²') {
      display.innerHTML = `${campo.value / 100 ** 2} Cm²`
    } else if (de.value == 'Cm²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100 ** 2} M²`
    }
  
    if (de.value == 'm²' && para.value == 'mm²') {
      display.innerHTML = `${campo.value / 100 ** 3} Mm²`
    } else if (de.value == 'mm²' && para.value == 'm²') {
      display.innerHTML = `${campo.value * 100 ** 3} M²`
    }
  }
  */