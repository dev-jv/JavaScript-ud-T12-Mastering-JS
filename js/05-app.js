// ----------------------------------------- <> Explicit binding



function persona(el1, el2) {
    console.log(`Mi Nombre es: ${this.name} & I  listen: ${el1} & ${el2} `);
}
const informacion = {
    name: 'Juan',
    job: 'Developer'
}
const musicaFavorita = ['Heavy Metal', 'Rock'];

// ------------------------------------------------------------ [.call]

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

// --------------------------------------- [.apply]

persona.apply(informacion, musicaFavorita);

// ---------------------------------------------------------------------------- [.bind]

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();




