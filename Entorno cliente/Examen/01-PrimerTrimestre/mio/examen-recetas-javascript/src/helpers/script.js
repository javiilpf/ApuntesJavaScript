/**
 * @author: Javier Avilés Ayuso
 * @description: Obtiene, almacena y devuelve las recetas con sistema de caché
 * @param
 * @return
 */

const url= import.meta.env.VITE_API_URL;
export const getRecipesCache=async()=>{
    try{
        
        if(localStorage.getItem('${recetas-cache}') && Date.now()>5000){
            const response= await fetch(url ,{
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(Date.now()),
            })
            return await response.json();
        }else if(localStorage.getItem('${recetas-cache}') && Date.now() < 5000){
            return localStorage.getItem(recetas-cache);
        }else if(!localStorage.getItem('${recetas-cache}')){
            const response= await fetch(url,{
                method: 'GET',
            });
            const data=await response.json();
            console.log(data);
            const date=Date.now();
            
            localStorage.setItem("recetas", JSON.stringify(data), "timeStamp", JSON.stringify(date));
        };
        
    }catch(error){
        console.error("El error en la respuesta es: ", error)
    }
    
}

/**
 * @description: Funcion que filtra las recetas con un tiempo de preparación específico
 * @param {Array<object>, number, number} recetas, minTime, MaxTime
 */

export const filterByTime=async (minTime, maxTime)=>{
    try{
        const response= await fetch(url);
        if(!response.ok){
            console.error("No se ha podido traer la información del json");
        }
        const data=await response.json();
        const map=new Map();
        data.forEach(receta => {
            if(receta.tiempo>minTime && receta.tiempo<maxTime){
                map.set(receta);
            }else{
                console.error("El tiempo mínimo es mayor que el tiempo máximo")
            }
            
        });
        
        console.log(map);
        
    }catch(error){
        console.error("Error en filterByTime: ", error);
    }
    
}

/**
 * @description: Funcion que obtiene las recetas en paralelo
 */

export const getRecipeDetails=async(idsRecetas)=>{
    try{
        const promesas=[];
        for (idReceta of idsRecetas){
            const response= await fetch(`${url}/${receta}`);
            if(!response.ok){
                console.error("La respuesta no se ha podido llevar a cabo");
            }
            promesas.push(response);
        }

        
    }catch(error){
        console.error("Error en la función getRecipeDetails");
    }
}
// Promise.all(getRecipeDetails(idsRecetas))
//   .then((resultados) => {
//     console.log("Todas las tareas han sido completadas:", resultados);
//   })
//   .catch((error) => {
//     console.error("Algo salió mal:", error);
//   });


/**
 * @description Funcion que organiza las recetas por dificultad
 * @param {Array<object>} recetas
 * @returns {map}
 */

export const orderRecipesByDifficulty=async(recetas)=>{
    try{
        const map=new Map();
        const response=await fetch(`${url}`);
        if(!response.ok){
            console.error("Error extrayendo la información");
        }
        const data=await response.json();
        
        
        
    }catch(error){
        console.error("Error en orderRecipesDifficulty: ", error)
    }
    
    
}

/**
 * @description: Funcion que permite valorar una receta
 * @param {number, number} recetaId, nuevaValoracion
 * @return
 */

export const scoreRecipe=async( recetaId, nuevaValoracion)=>{
    try{
        if(nuevaValoracion<=5 || nuevaValoracion>=0){
            
            const response=await fetch(`${url}/${recetaId}`, {
                method: 'PATCH',
                headers: {'Content-Type':'application/json',},
                body: JSON.stringify({valoracion: nuevaValoracion}),

            });
            if(!response.ok){
                console.error("No agrega los datos a la api");
            }else{
                console.log("agregada correctamente");
            }


            
        }else{
            console.error("la valoración que has introducido no está dentro de los rangos establecidos")
        }
    }catch(error){
        console.error("No se ha podido completar, error: ", error);
    }
}


/**
 * @description: Funcion que busca recetas por ingredientes y añade ingredientes únicos
 * @param {string, Array<Object>} nombreReceta, ArrayIngredientesParaAñadir
 * @return {String} nombres
 */

export const addIngredients=async(nombreReceta, ArrayIngredientesParaAñadir)=>{
    try{
        const response=await fetch(url);
        if(!response.ok){
            console.error("Fallo al traer la información de la URL")
        }
        const data=await response.json();
        const {nombre}=data;
        const nombres=data.filter((nombre)={
            nombre
        });
        return nombres

    }catch(error){
        console.error("Error en addIngredients: ", error)
    }
}