// ---------------------------- <> Coercion

// ------------------------- <> Coerion Implicita

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); // String>Numero






// ------------------------- <> Coercion Explicita

const numero3 = "20";

console.log(Number(numero3)); // String>Numero

// ------------------------- 

const numero4 = 20;

console.log(numero4.toString()); // Numero>String

// ------------------------- 

const pedido = [1,2,3,4];

console.log(pedido.toString()); // Array>String

console.log(JSON.stringify(pedido)); // Array>JSON-String










//Es la conversión automática o implicita de valores de un tipo de dato a otro





