//Destructuracion de Objetos
//Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1234,
            lng: 12.1111,
        }
    }
}

const avenger = useContext( persona );

const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );
console.log( nombreClave, anios, avenger );
console.log( lat, lng );