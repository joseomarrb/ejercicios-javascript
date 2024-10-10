/**
 * Completa la funcion que recibe un número negativo o positivo y retorna un numero con el signo opuesto.
 * ej
 * num = -4 -->  4
 * num = 8.3  --> -8.3
 */

// No cambies el nombre de la funcion ni los parametros
const cambioSigno = (num) => {
  //  Tu respuesta va aqui
  return num > 0 ? -num : num -= num + num;
};

console.log(cambioSigno(-18))

// 👇 No modifiques este codigo 🚫
module.exports = {
  cambioSigno,
};
