/**
 * @description: Ejercicio 1: Simulación de llamadas a una API con Fetch.
 */

// Aquí estoy importando la URL que tengo almacenada en el archivo .env
const urlData=import.meta.env.VITE_API_URL;
// Comienzo una función con async await sin parámetros
export const fetchUserData=async()=>{
    // En todas las funciones async await hay que hacer un try y un catch
    try {
        /**const response= await fetch('https://jsonplaceholder.typicode.com/users');*/
        // Hago un fetch de la data que se encuentra en el archivo .env
        const response=await fetch(urlData);
        // un if justo después para saber si la respuesta de la data sale bien o no.
        if (!response.ok) {
            // si sale q no le doy en la boca.
            throw new Error(`la respuesta no se ha llevado a cabo de forma correcta.`);
        }
        // Ahora uso await para que espere a que la data se haya cargado antes de continuar con la ejecución
        const data= await response.json();
        // introduzco en el localStorage la información que he extraído en data con la clave "usuario"
        localStorage.setItem("usuario", JSON.stringify(data));
        // const almacenados=[];
        
        // data.forEach((user) => {
        //     almacenados.push({id: user.id, name: user.name, username: user.username, email: user.email});
        // });

        // returneo la data que he extraido (no necesario estrictamente en esta actividad)
        return data;
    } catch (error) {
        // Si hay un error, lo imprimo en consola.
        console.error('Error:', error);
    }
}

/**
 * @description: Ejercicio 2: Manejo de errores con Async/Await y promesas.
 */

export const fetchPostWithError=()=>{
    const errors=new Set();
    const data=fetch("https://miprimalacojaestonta.es").then((response)=>{
        if(!response.ok){
            
            const error1="No se encuentra la data";
            errors.add(error1);
            throw new Error("HOLA", error1);
            return errors;
        }
        return response.json();
        
    }
    ).catch((error2)=>{
        errors.add(error2);
        console.error("HOLA", error2);
        return errors;
    })
}

/**
 * @description: Múltiples llamadas asíncronas en paralelo.
 */

export const fetchMultipleResources=async() => {
    try{

    }catch{

    }
}