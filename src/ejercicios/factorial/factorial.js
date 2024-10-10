/* 
- Encuentra el factorial de un numero (n!) entero mayor o igual a cero y retorna el resultado.
- Si introduce un elemento negativo retorna el mensaje: "La funcion no acepta negativos"

Ejemplo: 
6! = 1*2*3*4*5*6=720

1  * 2 =  2
2  * 3 =  6
6  * 4 =  24
24 * 5 =  120
120* 6 =  720
*/

// No cambies el nombre de la funcion ni los parametros
const factorial = (num) => {
  //  Tu respuesta va aqui
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
     resultado *= i
  }
  return resultado
};

console.log(factorial(6))
// 👇 No modifiques este codigo 🚫
module.exports = {
  factorial,
};
