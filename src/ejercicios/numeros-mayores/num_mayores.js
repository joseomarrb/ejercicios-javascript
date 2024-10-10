/*
Dado un array de arrays con números enteros positivos o negativos, encontrar el numero mas grande en cada array.
ejemplo:
array=[[1,4,2],[5,3,8],[10,2,43],[-1,0,1]] 
Deberia retornar ->[4,8,43,1] 
*/

// No cambies el nombre de la funcion ni los parametros
const numerosMasGrandes = (arr) => {

  const mayores = [];

  for (const externo of arr) {
    let numerosMayores = -Infinity;
    
    for (const interno of externo) {
      if (interno > numerosMayores) {
        numerosMayores = interno;
      } 
    }
    mayores.push(numerosMayores)
  }
    
  return mayores;

};

const ya = [[1,4,2],[5,3,8],[10,2,43],[-1,0,1]];



console.log(numerosMasGrandes([[1,4,2],[5,3,8],[10,2,43],[-1,0,1]]))
// 👇 No modifiques este codigo 🚫
module.exports = {
  numerosMasGrandes,
};
