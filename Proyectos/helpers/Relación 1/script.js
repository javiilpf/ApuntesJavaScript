// ------------------Declaracion de funciones-----------

/**
 * @author: javiilpf
 * @description: Ejercicio 1: Escribe una funcion llamada "sumaArrays" que tome
 * dos arrays "arr1" y "arr2" del mismo tamaño. La función debe devolver un nuevo
 * array que contenga la sumna de los elementos correspondientes de "arr1" y "arr2".
 * @param: {Array, Array} arr1, arr2
 * @returns: {Array, Array}
 */
export const sumaArrays = (arr1, arr2)=>{
    const sumArr1= arr1.reduce((acc, numero)=>acc += numero,0);
    const sumArr2= arr2.reduce((acc, numero)=>acc += numero, 0);
    return [sumArr1, sumArr2];
}

/**
 * @author: javiilpf
 * @description: Define una función llamada eliminarDuplicados que tome un array arr . La función debe
 * eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo
 * el orden original.
 * @param: {Array} arr
 * @returns: {Array}
 */
export const eliminarDuplicados = (arr) => {
    const result = arr.reduce((acc, numero) => {
        if (!acc.NoDuplicados.includes(numero)) {
            acc.NoDuplicados.push(numero);
        } else {
            acc.noSirven.push(numero);
        }
        return acc;
    }, { NoDuplicados: [], noSirven: [] });

    return result.NoDuplicados;
};
