/**
 * @description: Obtener las cartas de pokemon usando async/await y almacenarlas en un map para un acceso rápido por nombre
 * 
 */

const dataUrl="http://localhost:3000/pokemons";
export const getCartas=async() =>{
    try{
        const response=await fetch(dataUrl);
        if(!response.ok){
            throw new error ("No se puede extraer la información del json");
        }
        const data=await response.json();
        const pokemonMap=new Map();

        data.forEach((pokemon) =>{
            pokemonMap.set(pokemon.nombre, pokemon );

        })
        
        return pokemonMap;
       
    }catch(error){
        console.error("No se ha podido mostrar la información de pokemons", error);
    }
}


// /**
//  * @description: Ejercicio 2
//  */
// const dataUrl1="http://localhost:3000/carrito";
// export const addCarrito=async(pokemon)=>{
//     try{
//         const carrito=[];
//         if (!carrito.indexOf(pokemon.id)){
//             carrito.push(
//                 pokemon.id, 
//                 pokemon.nombre, 
//                 pokemon.cantidad,
//                 pokemon.precioUnitario,
//                 pokemon.precioTotal
//             );
//         }else{
//             const index=carrito.indexOf(pokemon.id);
//             carrito[index].cantidad+=1;
//         }
        

        
        
//         const response = await fetch(dataUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(pokemonId)
//         });
//         if (!response.ok) {
//             throw new Error('Error al insertar en la base de datos');
//         }
//         const data=await response.json();
//     }catch(error){
//         console.error("Error al insertar los datos", error);
//     }
// }

/**
 * @description: Ejercicio 3: Filtrar pokemon por habilidades.
 */

