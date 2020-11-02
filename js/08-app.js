// ----------------------------- <> Self


// self.onload = () => { // -------------------------- ¿wn?
//     console.log('Ventana Lista');
// }

// window.onload = () => {
//     console.log('Ventana lista');
// }

// ------

// const producto = {
//     nombre: "Monitor 20 pulgadas",
//     precio: 30,
//     disponible: true,
//     mostrarInfo: function() {

//         return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
//     }
// }

// console.log(producto.mostrarInfo());   

// ------

window.nombre = "Monitor 20 pulgadas";

const producto = {
    
    precio: 30,
    disponible: true,
    mostrarInfo: function() {

        return `El Producto: ${self.nombre}  tiene un precio de ${self.precio}`;
    }
}

console.log(producto.mostrarInfo());   



