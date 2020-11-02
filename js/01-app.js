
// ---------------------- <> Global Scope

const cliente1 = 'Juan'; 

function mostrarCliente1() {
    console.log(cliente1);
}

function obtenerCliente1() {
    console.log(cliente1);
}

mostrarCliente1();
obtenerCliente1();

// ---------------------------- <> Function Scope

const cliente2 = 'PABLO'
function mostrarCliente2() {
    const cliente2 = 'Juan';
    console.log(cliente2);
}

function obtenerCliente2() {
    console.log(cliente2);
}

mostrarCliente2(); // FS
obtenerCliente2(); // FG

// -------------------------------- <> Bloque Scope

const login = true; // GS

function clienteLogueado() {

    const cliente3 = "Juan"; // FS
    console.log(cliente3);

    if(login) {
        const cliente3 = 'Admin'; // BS
        console.log(cliente3);
    }

}

clienteLogueado();






// --------------------------- (*)

// const login = true; // GS

// function clienteLogueado() {

//     const cliente3 = "Juan"; // FS
//     console.log(cliente3);

//     if(login) {
//         console.log(cliente3); // (x) 
//         const cliente3 = 'Admin'; // BS
//         console.log(cliente3);
//     }

// }

// clienteLogueado();