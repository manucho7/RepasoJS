//Async Await
// version de promesa sin async

// const getImagenPromesa = () =>  
//     new Promise (resolve => resolve('https://google.com'))
// getImagenPromesa().then(console.log)


//version de promesa ASYNC:

const getImageAsync = async () => {
    try{
        const apiKey = 'F76VXM0yisKXabqdt6ZZM90lCc53zDta';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch ( error ){
        console.error( error );
    }

// console.log(data);
// console.log(url);

}

getImageAsync()




