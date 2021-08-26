// guardamos en una constante el % de IVA
const IVA = 0.21;

const calcularPrecio = function(precio) {
  // la función recibe por parámetro un precio y le sumamos el IVA
  console.log("Dentro de la funcion calcular");
  return precio + (precio * IVA);
}

module.exports = calcularPrecio;