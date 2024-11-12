import { filterByTime, getRecipesCache, orderRecipesByDifficulty, scoreRecipe } from "./helpers/script";
/**
 * @author Javier Avilés Ayuso
 * @descrition Función init en main para probar las funciones del script.js
 */
const init= async()=>{
  // console.log("-----------Ejercicio 1------------");
  // const cache=await getRecipesCache();
  // console.log(cache);



  // console.log("-----------Ejercicio 2------------");
  // const filter=await filterByTime(12, 40);



  // console.log("-----------Ejercicio 3------------")
  // const recetas=[1,2,3,4]
  // const detallesRecetas=await getRecipeDetails(recetas);
  


  // console.log("-----------Ejercicio 4------------")
  const nombres=["Pasta Carbonara", "Ensalada César", "Sopa de tomate"];
  const order=await orderRecipesByDifficulty(nombres);



  // console.log("-----------Ejercicio 5------------");
  // const valorar=await scoreRecipe( 4, 4.4); //Funciona correctamente
  //const valorar=await scoreRecipe(4,6); //No funciona porque le paso un parámetro mayor del que debo

  
}
init();