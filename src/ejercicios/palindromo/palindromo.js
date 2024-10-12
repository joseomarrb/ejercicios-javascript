/**
 * Completa la funcion para que retorne true si el string ingresado es un palindromo o false si no es palindromo.
 *Ej.
 *str="anita lava la tina" ---> true
 *str="AnitA LaVa la TIna" ---> true
 *str="JavaScript" ---> false
 *str="-%1-0*0_1#" --->true
 */
// No cambies el nombre de la funcion ni los parametros
const palindromo = (str) => {
  //  Tu respuesta va aqui
  const reverse = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("");
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  return str === reverse ? true : false;
};

console.log(palindromo("JavaScript"))

// 👇 No modifiques este codigo 🚫
module.exports = { palindromo };
