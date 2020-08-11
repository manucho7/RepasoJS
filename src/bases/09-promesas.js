//Promesas
//resolve es otro callback que se ejecuta si la promesa es exitosa
//reject se va a ejecutar cuando algo falla y se deba notificar
//3 metodos principales: then(), catch(), finally()
import { getHeroeById } from '../src/bases/08-import';

// const promesa = new Promise( (resolve, reject)=>{
//     setTimeout( ()=>{
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//     }, 2000 )

// });

// promesa.then( (heroe)=>{
//     console.log('heroe: ', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            const heroe = getHeroeById( id );
            if ( heroe ){
                resolve(heroe);
            } else {
                reject('No se pudo encontrar tu heroe gil');
            }
        }, 2000 )
    
    });
    return promesa;
}
getHeroeByIdAsync(10)
.then( heroe => {
    console.log('heroe:', heroe); 
})
.catch( err =>{
    console.log( err );
})
