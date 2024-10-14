/*
La funcion debe retornar un título. Es decir cada inicial de cada palabra tiene que estar en mayuscula y las demas en minusculas. Ej.
hola mundo -> Hola Mundo
HOLA MUNDO -> Hola Mundo
jaVaScript eS un gRan Lenguaje-> Javascript Es Un Gran Lenguaje
 */
// No cambies el nombre de la funcion ni los parametros
function titulo(str) {
  // Tu código va aquí
  const palabra = str.split(" ");
  const elemento = palabra.map( word => {
    return word.charAt().toUpperCase() + word.slice(1).toLowerCase()
  })
  return elemento.join(" ");
}
console.log(titulo("jaVaScript eS un gRan Lenguaje"))
// 👇 No modifiques este codigo 🚫
module.exports = {
  titulo,
};
