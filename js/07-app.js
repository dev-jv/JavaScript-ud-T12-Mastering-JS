// ---------------------------------- <> Event Loop

console.log("Primero");

setTimeout(function() {
    console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(function() {
    console.log("Cuarto ");
}, 0);

new Promise(function(resolve) {
    resolve("Desconectado... ")
}).then(console.log);

console.log("Ultimo");


// El Event Loop esta revisando siempre por funciones que ejecutar, esas funciones pasan al stack, y una vez que se ejecutan, entonces comienza ir al queue y comienza a ejecutar esas funciones...




























