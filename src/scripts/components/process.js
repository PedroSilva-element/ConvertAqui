function converte (recebe) {
    //Massa
    if (recebe == 'g/kg') {
      de.value = 'g'
      para.value = 'Kg'
    } else if (recebe == 'kg/g') {
      de.value = 'Kg'
      para.value = 'g'
    }
  
    if (recebe == 'g/hg') {
      de.value = 'g'
      para.value = 'Hg'
    } else if (recebe == 'hg/g') {
      de.value = 'Hg'
      para.value = 'g'
    }
  
    if (recebe == 'g/dag') {
      de.value = 'g'
      para.value = 'Dag'
    } else if (recebe == 'dag/g') {
      de.value = 'Dag'
      para.value = 'g'
    }
  
    if (recebe == 'g/dg') {
      de.value = 'g'
      para.value = 'Dg'
    } else if (recebe == 'dg/g') {
      de.value = 'Dg'
      para.value = 'g'
    }
  
    if (recebe == 'g/cg') {
      de.value = 'g'
      para.value = 'Cg'
    } else if (recebe == 'cg/g') {
      de.value = 'Cg'
      para.value = 'g'
    }
  
    if (recebe == 'g/mg') {
      de.value = 'g'
      para.value = 'Mg'
    } else if (recebe == 'mg/g') {
      de.value = 'Mg'
      para.value = 'g'
    }
  
    //Tempo
    if (recebe == 'hora/min') {
      de.value = 'H'
      para.value = 'Min'
    } else if (recebe == 'min/hora') {
      de.value = 'Min'
      para.value = 'H'
    } else if (recebe == 'hora/seg') {
      de.value = 'H'
      para.value = 'Seg'
    } else if (recebe == 'seg/hora') {
      de.value = 'seg'
      para.value = 'H'
    } else if (recebe == 'min/seg') {
      de.value = 'Min'
      para.value = 'Seg'
    } else if (recebe == 'seg/min') {
      de.value = 'Seg'
      para.value = 'Min'
    }
    //Distancia
    if (recebe == 'm/s') {
      de.value = 'M/s'
      para.value = 'Km/h'
    } else if (recebe == 'km/h') {
      de.value = 'Km/h'
      para.value = 'M/s'
    }
    //Temperatura
    if (recebe == 'c/f') {
      de.value = 'C°'
      para.value = 'F°'
    } else if (recebe == 'f/c') {
      de.value = 'F°'
      para.value = 'C°'
    } else if (recebe == 'c/k') {
      de.value = 'C°'
      para.value = 'K°'
    } else if (recebe == 'k/c') {
      de.value = 'K°'
      para.value = 'C°'
    }
    //Comprimento
    if (recebe == 'm/km') {
      de.value = 'm'
      para.value = 'Km'
    } else if (recebe == 'km/m') {
      de.value = 'Km'
      para.value = 'm'
    }
  
    if (recebe == 'm/hm') {
      de.value = 'm'
      para.value = 'Hm'
    } else if (recebe == 'hm/m') {
      de.value = 'Hm'
      para.value = 'm'
    }
  
    if (recebe == 'm/dam') {
      de.value = 'm'
      para.value = 'Dam'
    } else if (recebe == 'dam/m') {
      de.value = 'Dam'
      para.value = 'm'
    }
  
    if (recebe == 'm/dm') {
      de.value = 'm'
      para.value = 'Dm'
    } else if (recebe == 'dm/m') {
      de.value = 'Dm'
      para.value = 'm'
    }
  
    if (recebe == 'm/cm') {
      de.value = 'm'
      para.value = 'Cm'
    } else if (recebe == 'cm/m') {
      de.value = 'Cm'
      para.value = 'm'
    }
  
    if (recebe == 'm/mm') {
      de.value = 'm'
      para.value = 'mm'
    } else if (recebe == 'mm/m') {
      de.value = 'mm'
      para.value = 'm'
    }
    //Volume
    if (recebe == 'm³/km³') {
      de.value = 'm³'
      para.value = 'Km³'
    } else if (recebe == 'km³/m³') {
      de.value = 'Km³'
      para.value = 'm³'
    }
  
    if (recebe == 'm³/hm³') {
      de.value = 'm³'
      para.value = 'Hm³'
    } else if (recebe == 'hm³/m³') {
      de.value = 'Hm³'
      para.value = 'm³'
    }
  
    if (recebe == 'm³/dam³') {
      de.value = 'm³'
      para.value = 'dam³'
    } else if (recebe == 'dam³/m³') {
      de.value = 'dam³'
      para.value = 'm³'
    }
  
    if (recebe == 'm³/dm³') {
      de.value = 'm³'
      para.value = 'Dm³'
    } else if (recebe == 'dm³/m³') {
      de.value = 'Dm³'
      para.value = 'm³'
    }
  
    if (recebe == 'm³/cm³') {
      de.value = 'm³'
      para.value = 'Cm³'
    } else if (recebe == 'cm³/m³') {
      de.value = 'Cm³'
      para.value = 'm³'
    }
  
    if (recebe == 'm³/mm³') {
      de.value = 'm³'
      para.value = 'mm³'
    } else if (recebe == 'mm³/m³') {
      de.value = 'mm³'
      para.value = 'm³'
    }
    //Área
  
    if (recebe == 'm²/km²') {
      de.value = 'm²'
      para.value = 'Km²'
    } else if (recebe == 'km²/m²') {
      de.value = 'Km²'
      para.value = 'm²'
    }
  
    if (recebe == 'm²/hm²') {
      de.value = 'm²'
      para.value = 'Hm²'
    } else if (recebe == 'hm²/m²') {
      de.value = 'Hm²'
      para.value = 'm²'
    }
  
    if (recebe == 'm²/dam²') {
      de.value = 'm²'
      para.value = 'Dam²'
    } else if (recebe == 'dam²/m²') {
      de.value = 'Dam²'
      para.value = 'm²'
    }
  
    if (recebe == 'm²/dm²') {
      de.value = 'm²'
      para.value = 'Dm²'
    } else if (recebe == 'dm²/m²') {
      de.value = 'Dm²'
      para.value = 'm²'
    }
  
    if (recebe == 'm²/cm²') {
      de.value = 'm²'
      para.value = 'Cm²'
    } else if (recebe == 'cm²/m²') {
      de.value = 'Cm²'
      para.value = 'm²'
    }
  
    if (recebe == 'm²/mm²') {
      de.value = 'm²'
      para.value = 'mm²'
    } else if (recebe == 'mm²/m²') {
      de.value = 'mm²'
      para.value = 'm²'
    }
  }