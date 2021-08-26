// importamos nuestro modulo y lo guardamos en una variable
// lo que importamos es la funcion que exportamos en el archivo calcular.js
const obtenerPrecio = require('./calcular');

// la ejecutamos y obtenemos el precio final con IVA
const precio = obtenerPrecio(200);

// finalmente mostramos en la consola el precio
console.log(precio);


// Tambien podemos importar el modulo que descargamos de NPM
const rgba = require('color-rgba');

// lo ejecutamos
const colorRed = rgba('red');

// y podemos mostrar en la consola el rgba del color rojo
console.log(colorRed) // [255, 0, 0, 1]