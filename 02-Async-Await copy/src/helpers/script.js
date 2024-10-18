// https://swapi.dev/api/people/
// https:starwars-visualguide.com

// Crear dos funciones uno con promesas y el otro con async await que obtenga los personajes de star wars (nombre, altura y url de la imágen)
// de cada uno de los usuarios de start wars y guardar la información obtenida en el localStorage.

const urlData=import.meta.env.VITE_URL_API;
export const getUsers=() =>{
    const datos=fetch(urlData);
    if(!Response.ok){
        throw new Error ('Error en la petición')
    }
    console.log("La respuesta es ", response);
}