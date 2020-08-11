// Arreglos en JS - Arrays

const arreglo = [1,2,3,4];
//dice push no se usa mas, porque modifica el array inicial, 
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);


let arreglo2 = [...arreglo, 5];
//creo un nuevo array con la informacion que compone a ...arreglo
//y conformo un nuevo array con esa info + nueva posicion final

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );