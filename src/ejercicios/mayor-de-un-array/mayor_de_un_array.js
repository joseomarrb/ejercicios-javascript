/**
 * Completa la función para que retorne el numero mayor de un array.
 * Ej.
 * arr=[1,20,3,4,9,] ---> 20
 * arr=[-2,-9,-2,-3,-1] ---> -1
 * arr=[-1,3,-4,4]---> 4
 */

// No cambies el nombre de la funcion ni los parametros
const mayorDeUnArray = (arr) => {
  //  Tu respuesta va aqui
  let mayor = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > mayor){
      mayor = arr[i]
    }
  }
  return mayor
};

console.log(mayorDeUnArray([-2,-9,-2,-3,-1]))

// 👇 No modifiques este codigo 🚫
module.exports = {
  mayorDeUnArray,
};
