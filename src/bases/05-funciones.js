// Funciones
//no es recomentable de esta forma 
function saludar( nombre ){
    return `Hola, ${ nombre }`;
}

//es recomendable guardar el resultado de una funcion en una const
const saludar2 = function ( nombre ) {
    return `Hola, ${ nombre }`;
}

//Funciones de flecha
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

//Una expresion mas simple y directa seria:

const saludar4 = ( nombre ) => `Hola, ${ nombre }`;


console.log( saludar('Manucho'));
console.log( saludar2('Manusa'));
console.log( saludar3('Manuzi'));
console.log( saludar4('Manuzo'));


const getUser = () => {
    return {
        uid: 'ABC123',
        username:'EL_PAPI123',
    }
}

console.log( getUser() );

//TAREA

const getUsuarioActivo = ( nombre ) =>
    ({
        uid: 'ABC111',
        usernmame: nombre,
    })

const usuarioActivo = getUsuarioActivo( 'Manuchiiiiiiiiii' );
console.log(usuarioActivo);