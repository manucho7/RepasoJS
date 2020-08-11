const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 232323,
        lat:3232,
        lng: 32.123,
    }
};

//console.table(persona);

console.log(persona);

const persona2 = {...persona}
persona2.nombre = "peter";

console.log(persona2);
