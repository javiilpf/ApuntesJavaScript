import { filterHabilitiesPokemons, getCartas } from "./helpers/script";

const init= async()=>{
    console.log("------------Ejercicio 1------------")
    const dataMapPokemons=await getCartas();
    console.log(dataMapPokemons);
    console.log("------------Ejercicio 2------------")
    // const dataInsertCarrito=await addCarrito(2);
    // console.log(dataInsertCarrito);
    console.log("------------Ejercicio 3------------")
    const habilidad="fuego";
    const datafilter=await filterHabilitiesPokemons(habilidad);
    
}

// Inicio de la aplicación
init();
// dataInsertCarrito();
