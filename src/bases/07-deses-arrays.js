// Desestructuracion de Arrays / Arreglos

const personajes = ['Goku', 'Vegeta', 'Manu'];

//console.log( personajes[0] );
//console.log( personajes[1] );
//console.log( personajes[2] );
const [ , ,p2 ] = personajes
console.log( p2 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

const useState = ( valor ) => {
    return [ valor, ()=> {console.log('Hola mundo')} ];
}

const [ nombre, setNombre ] = useState("Goku");

console.log( nombre );
setNombre();