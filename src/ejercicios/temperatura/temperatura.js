/*
Complete la funcion celciusAFahrenheit. Debe retornar los grados Fahrenheit (°F) con un numero entero al recibir la temperatura en grados Celcius (°C) 
La formla es:
  °F=(°C × 9/5) + 32
*/

// No cambies el nombre de la funcion ni los parametros
const celciusAFahrenheit = (celcius) => {
  // Tu código va aquí
  return `${(celcius * 9 / 5) + 32}°`
};
console.log(celciusAFahrenheit(35))
/*
Complete la funcion celciusAFahrenheit. Debe retornar los grados Celcius (°C) con un numero entero al recibir la temperatura en grados Fahrenheit (°F) 
La formla es:
°C=(°F − 32) × 5/9 
*/

// No cambies el nombre de la funcion ni los parametros
const fahrenheitACelcius = (fahrenheit) => {
  // Tu código va aquí
  return `${Math.round((fahrenheit - 32) * 5 / 9)}°`
};
console.log(fahrenheitACelcius(35))
/*
Complete la funcion fahrenheitAKelvin. Debe retornar los grados Kelvin (°C) con un numero entero al recibir la temperatura en grados Fahrenheit (°F) 
K=(°F − 32) × 5/9 + 273.15

*/

// No cambies el nombre de la funcion ni los parametros
const fahrenheitAKelvin = (fahrenheit) => {
  // Tu código va aquí
  return `${Math.round((fahrenheit - 32) * 5 / 9 + 273.15)}°`
};
console.log(fahrenheitAKelvin(35))
// 👇 No modifiques este codigo 🚫
module.exports = {
  celciusAFahrenheit,
  fahrenheitACelcius,
  fahrenheitAKelvin,
};
