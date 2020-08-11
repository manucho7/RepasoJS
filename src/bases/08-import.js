import heroes from '../data/heroes';
//const { heroes } = require("./data/heroes");


export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);


//console.log(getHeroeById(3));



export const getHereosByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//console.log( getHereosByOwner('DC') );

