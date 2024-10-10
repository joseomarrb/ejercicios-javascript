/* 
Completa la funcion para que elimine los elementos repetidos de un array y retorne el array sin elementos repetidos.
Ej. 
arr=[1,3,4,1,2,3,4,5] --> [1,3,4,2,5]
arr=["hola","mundo","mundo","del","desarrollo","del"] -->[ 'hola', 'mundo', 'del', 'desarrollo' ]
arr=["tengo",90, "años",90, "viviendo", "tengo","en","en","mi","país","país"] --> [ 'tengo', 90, 'años', 'viviendo', 'en', 'mi', 'país' ]
*/

// No cambies el nombre de la funcion ni los parametros
const eliminaRepetidos = (arr) => {
  //  Tu respuesta va aqui
  const nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (nuevoArr.indexOf(arr[i]) === -1) {
      nuevoArr.push(arr[i])
    }
  }
  return nuevoArr;
};

console.log(eliminaRepetidos([1,3,4,1,2,3,4,5] ))
console.log(eliminaRepetidos(["tengo",90, "años",90, "viviendo", "tengo","en","en","mi","país","país"]  ))

// 👇 No modifiques este codigo 🚫
module.exports = {
  eliminaRepetidos,
};
