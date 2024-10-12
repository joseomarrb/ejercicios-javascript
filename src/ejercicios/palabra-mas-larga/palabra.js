/* Retorna en un arreglo la palabra mas larga y la cantidad de caracteres de la siguiente oración. 
Ejemplo: ["Javascript", 10]*/
const str = "Me gustan los retos por eso resuelvo ejercicios en Javascript";

// No cambies el nombre de la funcion ni los parametros
const palabraMasLarga = (str) => {
  // tu codigo
  let arreglo;
  const modified = str.split(" ");
  let mayor = modified[0];
  
  for (const element of modified) {
    if ( element.length >= mayor.length ) {
      mayor = element;
    }
  }
  
  return arreglo = [mayor, mayor.length];
};

console.log(palabraMasLarga(str))

// 👇 No modifiques este codigo 🚫
module.exports = {
  palabraMasLarga,
};
