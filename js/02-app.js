// ------------------------------------- <> Hoisting!



// ---------------------------------------------------- <> Function Declaration

function obtenerCliente1(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente1('Juan');

// ---

obtenerCliente2('Juan');

function obtenerCliente2(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// --------------------------------------------- <> Function Expression

const obtenerCliente3 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente3('Juan');

// ---

// obtenerCliente4('Juan');  // Cannot access 'obtenerCliente4' before initialization

// const obtenerCliente4 = function(nombre) {
//     console.log(`El nombre del cliente es ${nombre}`);
// }








// Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución).


