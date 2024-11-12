// 

const urlApi=import.meta.env.VITE_URL_API;
const port=import.meta.env.VITE_PORT;
const urlApiRecetas=`${urlApi}:${port}/recetas`

export const getRecipesCache = async()=>{
    // recetas-cache <-- Clave del localStorage
    const recipesCache = localStorage.getItem('recetas-cache');
    if(recipesCache && Date.now()-JSON.parse(recipesCache).timeStamp<5*60*1000){
        return recipesCache.recetas;
    }
    try{
        const response=await fetch(urlApiRecetas);
        if(!response.ok){
            throw new Error(`Error al obtener las recetas. Status: ${response.status}`);
        }
        const recetas= await response.json();
        localStorage.setItem('recetas-cache',JSON.stringify({recetas,timeStamp:Date.now()}));
        return recetas;
    }catch(error){
        console.error(error);
        return [];
    }
}

export const filterByTime=(recetas, minTime, maxTime)=>{
    if(minTime > maxTime){
        throw new Error("El tiempo mínimo no puede ser mayor que el máximo");
    }
    return recetas.filter(recipe=>recipe.preparacion.tiempo>=minTime && recipe.preparacion.tiempo<=maxTime);
}

export const getRecipeDetails=async(idsRecetas)=>{
    try{

        const fetchPromise=idsRecetas.map((id)=>{//-
            return fetch(`${urlApiRecetas}/${id}`)//-
            .then((response)=>response.json()//-
            .catch((error)=> console.log("Error al obtener los detalles de las recetas"))//-
        });
        return await Promise.all(fetchPromise);
    }catch(error){
        console.error(error);
        return null;
    }
}

export const orderRecipesByDifficulty=async(recetas)=>{
    const miMap=new Map();
    //Recorro las recetas para sacar las dificultades que hay
    const dificultadesNoRepetidas=new Set();
    recetas.map(({ dificultad })=>{
        dificultadesNoRepetidas.add(dificultad);
    })
    Array.from(dificultadesNoRepetidas).forEach(dificultad=>{
        miMap.set(dificultad,[]);
    })

    recetas.forEach(receta=>{
        miMap.get(receta.dificultad).push(receta);
    })
    return miMap;
}

export const scoreRecipes=async(recetas, recetaId, nuevaValoracion)=>{
    try{
        if(nuevaValoracion<0 || nuevaValoracion>5){
            throw new Error("La valoración debe estar entre 0 y 5");
        }
        // return recetas.map((receta)=>receta.id===recetaId?{...receta,valoracion:nuevaValoracion}:receta)
        const response=await fetch(`${urlApiRecetas}/${recetaId}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({valoracion:nuevaValoracion})
        });
        if(!response.ok){
            throw new Error(`Error al actualizar la valoración de la receta. Status: ${response.status}`);
        }
        return await response.json();
        
        

        
    }catch(error){
        console.error(error);
        
    }
}

export const addIngredients=async (recetas, nombreReceta, ArrayIngredientesParaAñadir)=>{
    const receta=recetas.find((receta)=> receta.nombre===nombreReceta);
    if(!receta){
        throw new Error("No se ha encontrado la receta");
    }
    const uniqueIngredients=new Set([...receta.ingredientes, ...ArrayIngredientesParaAñadir]);
    const newIngredientes=newIngredientes;
    try{
        await fetch(`${url}`)
    }
}