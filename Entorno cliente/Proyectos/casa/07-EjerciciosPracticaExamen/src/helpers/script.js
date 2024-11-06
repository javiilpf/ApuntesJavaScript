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

// /**
//  * @description: Ejercicio 2: Manejo de errores con Async/Await y promesas.
//  */

// export const fetchPostWithError=()=>{
//     const errors=new Set();
//     const data=fetch("https://miprimalacojaestonta.es").then((response)=>{
//         if(!response.ok){
            
//             const error1="No se encuentra la data";
//             errors.add(error1);
//             throw new Error("HOLA", error1);
//             return errors;
//         }
//         return response.json();
        
//     }
//     ).catch((error2)=>{
//         errors.add(error2);
//         console.error("HOLA", error2);
//         return errors;
//     })
// }

/**
 * @description: Múltiples llamadas asíncronas en paralelo con async await
 */

export const fetchMultipleResourcesAsync=async()=>{
    const urls=[
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'
    ];
    console.time('Async/Await');
    try{
        const response=await Promise.all(urls.map(url=>fetch(url)));
        const [users, posts, comments]=await Promise.all(response.map(res=>res.json()));

        const resultMap=new Map();
        resultMap.set({"usuarios": users, "posts": posts, "comentarios":comments})
        
    }catch(error){
        console.error("Error en la petición", error);

    }
    console.timeEnd('Async/Await');
}

// PREGUNTAR ESTO
// export const  fetchMultipleResourcesAllSettled = async () => {
//     const urls=[
//         'https://jsonplaceholder.typicode.com/users',
//         'https://jsonplaceholder.typicode.com/posts',
//         'https://jsonplaceholder.typicode.com/comments'
//     ];
//     // Usamos Promise.allSettled para obtener los recursos en paralelo
//     const results = await Promise.allSettled(
//       Object.entries(urls).map(([key, url]) => 
//         fetch(url)
//           .then(response => response.json())
//           .then(data => ({ key, data }))
//           .catch(error => ({ key, error }))
//       )
//     );
// }



/**
 * @description: Actividad 1: Crear producto.
 * 
 */
const urlData1=`${import.meta.env.VITE_API_URL2}productos`;
export const addProduct=async(newData)=>{
    try{
        const response = await fetch(urlData1, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        if(!response.ok){
            console.error("No se ha conseguido entrar al json");
        }
        return await response.json();
    }catch(error){
        console.error("El error es: ", error);
    }
}

/**
 * @description: Funcion que usa get para recuperar todos los productos.
 */
const urlData3=import.meta.env.VITE_API_URL2;
export const getProductos=async()=>{
    try{
        const response = await fetch(`${urlData3}productos`, { 
            method: 'GET' 
        });
        const response2 = await fetch(`${urlData3}categorias`, { 
            method: 'GET' 
        });
        
        const data=await response.json();
        const data1=await response2.json();
        //console.log(data1);
        data.forEach((producto)=>{
            const { categoriaId }=producto;
            
            data1.forEach((categoria)=>{
                const {id, nombre}=categoria;
                
                if (id==categoriaId){
                    console.log(producto, nombre);
                     return producto, nombre;
                 }
            })
        })
    }catch(error){
        console.error("El error es: ", error);
    }

    
    

}

/**
 * @description: Actualizar producto con solicitud PATCH
 * 
 */

export const updateProduct=async(updatedData, idData)=>{
    try{
        const response=await fetch(`${urlData3}productos/${idData}`, {
            method: 'PATCH', 
            headers: { 'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(updatedData) 
    });
        if(!response.ok){
            console.log("Error");
        }    
        return await response.json();
    }catch(error){
        console.error("El error es el siguiente: ", error);
    }
    

}


/**
 * @description: Ejercicio4: Eliminar productos.
 */

export const deleteProducts=async (idProducto)=>{
    try{
        const response= await fetch(`${urlData3}productos/${idProducto}`, {
            method:'DELETE'
        });
        if(!response.ok){
            throw new Error("Error en la aplicación");
        }
        console.log("Producto eliminado");
    }catch (error){
        console.error("error en la aplicación: ", error);
    }
}

/**
 * @description: Obtener y crear categorías
 */

export function getCategorías(){
    return fetch (`${urlData3}categorias`,{
        method: 'GET',

    })
    .then(response=>{
        if(!response.ok){
            console.error("la respuesta no ha sido la esperada");
        }
        return response.json()
    })
}
export function setCategorias(categoria){
    return fetch(`${urlData3}categorias`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(categoria)
    })
    .then(response=>{
        if(!response.ok){
            console.error("No se ha podido añadir correctamente");
        }
        return response.json();
    })
}

export function promesa(newCat){
    Promise.all([getCategorías(), setCategorias(newCat)])
    .then(([categorias, categoriasCreadas])=>{
        console.log("Categorías obtenidas: ", categorias);
        console.log("Categorias Creadas: ", categoriasCreadas);
    })
    .catch(e =>{
        throw new Error(e);
    })
}

/**
 * @description: Remix actividad 4 pero usando promise.allSettled
 */

export const deleteProductsById=async(productId)=>{
    try{
        const response=await fetch(`${urlData3}productos/${productId}`,{
            method: 'DELETE'
        });
        if(!response.ok){
            console.error("Error al eliminar el producto")
        }
        return {
            status: 'fulfilled',
            productId,
        }
    }catch(error){
        return {
            status: 'rejected',
            productId,
            reason:error.message,
        }
    }
}
export const deleteMultipleProducts=async(productsIds)=>{
    const deletePromises=productsIds.map(id=> deleteProductsById(id));
    const results=await Promise.allSettled(deletePromises);
    console.log(results);
    results.forEach(result=>{
        if(result.status==='fulfilled'){

            console.log(`El elemento con id: ${result.value.productId} se ha eliminado correctamente`);
        }else{
            console.log(`El elemento con id: ${result.value.productId} no eliminado.`)
        }
    })
}

/**
 * @description: Ejercicio 7: Filtrar productos.
 */

export const filterProducts=async({precioMin=0, precioMax=Infinity, stockMin=0, stockMax=Infinity})=>{
try{


    const response= await fetch(`${urlData3}productos`);
    if(!response.ok){
        throw new Error("Error al hacer el fetch");
    };
    const data=await response.json();
    const productosFiltrados=data.filter(producto=>
        producto.precio >= precioMin &&
        producto.precio <= precioMax &&
        producto.stock >= stockMin &&
        producto.stock <= stockMax
    )
    return productosFiltrados;
}catch(error){
    console.error("Error en la ejecución de la apoi", error);
}

}

/**
 * @description: Ejercicio 3, hemos vuelto atras como los cangrejos
 */

const urlData5=import.meta.evn.VITE_API_URL;

export const getUsers=async()=>{
    try{
        const response =await fetch(`${urlData5}users`);
        if(!response.ok){
            console.error("error en la extracción de la data");
        }
        return response.json();
    }catch(error){
        console.error("Error en la consulta a la url", error);
    }
}
export const getPosts=async()=>{
    try{
        const response =await fetch(`${urlData5}posts`);
        if(!response.ok){
            console.error("error en la extracción de la data");
        }
        return response.json();
    }catch(error){
        console.error("Error en la consulta a la url", error);
    }
}
export const getComments=async()=>{
    try{
        const response =await fetch(`${urlData5}comments`);
        if(!response.ok){
            console.error("error en la extracción de la data");
        }
        return response.json();
    }catch(error){
        console.error("Error en la consulta a la url", error);
    }
}
export const getPromiseAll=()=>{
    Promise.all([getUsers(),getPosts(), getComments()])
    .then(([usuarios, post, comentarios])=>{
        console.log(usuarios);
        console.log(post);
        console.log(comentarios);
    })
    .catch(error=>{
        console.error("Error: ", error)
    })
    
}
export const fetchAllSet = async (string) => {
    try{
      const response = await fetch(`${URL1}/${string}`, {
        method:'GET'
      });
  
      if(!response.ok){
        throw new Error('No se ha conectado a la bd');
      }
  
      return response.json();
  
  
    }catch(e){
      throw new Error(e);
    }
  }
  
  export const AllSet = async (strings) => {
  
    try{
        const fetch = strings.map(string => fetchAllSet(string));
        const results = await Promise.allSettled(fetch);
        results.forEach(result => {
          if(result.status === 'fulfilled') {
            console.log(result.value);
          }else{
            console.log("error");
          }
        })
  
    }catch(e){
      throw new Error(e)
  }
  
  }
