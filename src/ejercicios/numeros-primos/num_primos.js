/**
 * Completa la función para que retorne en un arreglo los números primos anteriores o iguales al número recibido por argumento
 * Ej.
 * num = 10 ---> [2, 3, 5, 7]
 * num = 5 --->[2,3,5]
 */

// No cambies el nombre de la funcion ni los parametros
const numPrimos = (num) => {
  // Tu codigo aquí 👇
  let arreglo = [];

  for (let i = 2; i <= num ; i++ ) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false; 
        break;
      }
    }

    if (esPrimo) {
      arreglo.push(i); 
    }
  }

  return arreglo
};
console.log(numPrimos(10))

// 👇 No modifiques este codigo 🚫
module.exports = {
  numPrimos,
};