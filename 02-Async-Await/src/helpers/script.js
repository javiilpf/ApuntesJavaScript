/**
 * Funcion getUsers que realiza una petición a una API
 * https://jsonplaceholder.typicode.com/todos
 */

const urlData=import.meta.env.VITE_URL_API;
export const fetchDataUsersPromise = () => {
    const datos= fetch(urlData)
    
    .then((response)=>{
        if (!response.ok){
            throw new Error(`Error en la petición`);
        }
        console.log("La respuesta es ", response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })// se ejecuta cuando se resuelve correctamente la promesa.
    .catch((error)=>{
        console.log("Error access data: "), error
    })
};

export const fetchDataUsersAsync = async() => {
    try {
        const response=await fetch(urlData);
        if (!response.ok){
            throw new Error(`Error en la petición`);
        }
        const data= await response.json();
        console.log("La data es: ", data);
    }catch (error) {

    }
}

