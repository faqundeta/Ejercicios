function calcularResultadoDeExamen(nota) {
  if (nota < 4) {
    return 'aplazado'
  } else if (nota > 4 && nota < 6) {
    return 'recuperar'
  } else if (nota > 6){
    return 'aprobado'
  } else if (nota === 10) {
    return 'sobresaliente'
  }
}




function sonHermanos(primeraPersona, segundaPersona) {
  if (primeraPersona.madre === segundaPersona.madre && primeraPersona.padre === segundaPersona.padre) {
    return true
  } else {
    return false
  }
}

const persona1 = {
  madre: 'cecila',
  padre: 'jorge',
}

const persona2 = {
  madre: 'cecila',
  padre: 'raul',
}

const persona3 = {
  madre: 'cecila',
  padre: 'jorge',
}



console.log(sonHermanos(persona1, persona2))
console.log(sonHermanos(persona1, persona3))




function contarEspacios(texto) {
   let espacios = 0
    
   for (let i = 0; i < texto.length; i++) {
     if (texto[i] === ' ') {
     espacios = espacios + 1
    }
}
    return espacios
}

console.log(contarEspacios('este texto tiene 4 espacios'))
console.log(contarEspacios('este 1'))