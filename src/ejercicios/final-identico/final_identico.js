/*
Crea una función que verifique el final de una cadena. 
Ej.
cadena="hola mundo"
final="undo"
retorna-> true

cadena="hola"
final="h"
retorna-> false
 */
// No cambies el nombre de la funcion ni los parametros
const finalIdentico = (cadena, final) => {
  //  Tu respuesta va aqui
    return cadena.slice(-final.length) === final;
};
let hooa = "hashdahsdhf";
console.log(hooa.slice(-1))

console.log(finalIdentico("mundo", "do"))
// 👇 No modifiques este codigo 🚫
module.exports = {
  finalIdentico,
};
