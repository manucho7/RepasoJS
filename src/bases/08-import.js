import heroes from '../data/heroes';
//const { heroes } = require("./data/heroes");


const getHeroeById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id);
}

console.log(getHeroeById(3));



const getHereosByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHereosByOwner('DC') );

