/**
 * Completa la función para que retorne un arreglo con numeros enteros y positivos elevados al cuadrado.
 * Ej.
 *arr = [3,-3, 4.8, 5, 3, -3.2] ---> [9,25,9]
 *arr = [-9,3, 3.0, 8.2, 0 ,2] ---> [9,9,4]
 */
// No cambies el nombre de la funcion ni los parametros
const cuadradoEnteros = (arr) => {
  //  Tu respuesta va aqui
  let nuevoArr = [];
  for (const num of arr) {
    if ( num > 0 && Number.isInteger(num) ) {
      nuevoArr.push(num * num)
    }
  }
  return nuevoArr;
};

console.log(cuadradoEnteros([3,-3, 4.8, 5, 3, -3.2] ))
console.log(cuadradoEnteros([-9,3, 3.0, 8.2, 0 ,2] ))

// 👇 No modifiques este codigo 🚫
module.exports = {
  cuadradoEnteros,
};
