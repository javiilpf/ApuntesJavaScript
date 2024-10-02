// ------------------Declaracion de funciones-----------
/**
 * @author: javiilpf
 * @description: Ejercicio 1: Define una función llamada mapearNumeros que toma dos argumentos: un array arr y una
 * función funcion . La función debe aplicar la función proporcionada a cada elemento del array y
 * devolver un nuevo array con los resultados de la función aplicada a cada elemento.
 * @param: {Array, function} arr1, funcion
 * @returns: {Array}
 */
export const mapearNumeros= (arr, funcion)=> arr.reduce((acc, numero)=> funcion(arr[acc]), 0);

/**
 * @author: javiilpf
 * @description: Ejercicio 2: Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como
 * objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo
 * @param: {Array/object, Array/object} obj1, obj2
 * @returns: {Array, Array}
 */
export const combinarObjetos=(obj1, obj2)=>{
    

}