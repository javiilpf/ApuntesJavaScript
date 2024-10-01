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
    if (arr1.length == arr2.length){
        let sumaAmbos=[];
        for(let i = 0; i<arr1.length; i++){
            sumaAmbos.push(arr1[i] + arr2[i]);
        }
        return [sumaAmbos];
    }else {
        return `Deben ser la misma longitud los arrays`;
    }
    
    
}

/**
 * @author: javiilpf
 * @description: Ejercicio 2: Define una función llamada eliminarDuplicados que tome un array arr . La función debe
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

/**
 * @author: javiilpf
 * @description: Ejercicio 3: Crea una función llamada filtrarPares que tome un array de números arr y devuelva un
 * nuevo array que contenga solo los números pares.
 * @param: {array} arr
 * @return: {array}
 */
export const filtrarPares = (arr) =>{
    const resultado= arr.reduce((acc, numero)=>{
        if ((numero % 2)==0){
            acc.pares.push(numero);
        }else{
            acc.Impares.push(numero);
        }
        return acc
    }, { pares:[], Impares: []})
    return resultado.pares;
};

/**
 * @author: javiilpf
 * @description: Ejercicio 4:Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
 * en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 * @param: {..array} ...arr
 * return {array}
 */
export const unirArrays = (...arr) => {
    return arr.reduce((acc, numero)=> acc.concat(numero),[]);
};

/**
 * @author: javiilpf
 * @description: Ejercicio 5: Define una función llamada contarPalabras que tome una cadena de texto texto y devuelva un
 * objeto que cuente cuántas veces aparece cada palabra en el texto.
 * @param: {String} texto
 * @return: {number}
 */
export const contarPalabras = (texto) => {
    const contador = [];
    const palabras = texto.split(' ');

    for (const palabra of palabras) {
        const objetoExistente = contador.find(obj => obj.Palabra === palabra);
        if (objetoExistente) {
            objetoExistente.vecesRepetida += 1;
        } else {
            contador.push({ Palabra: palabra, vecesRepetida: 1 });
        }
    }

    return contador;
};


/**
 * @author: javiilpf
 * @description: Ejercicio 6: Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene 
 * de menor a mayor .
 * @param: {String} texto
 * @return: {number}
 */
export const ordenarNumeros = (arr) => {
    return arr.sort((a, b) => a - b);
}

/**
 * @author: javiilpf
 * @description: Ejercicio 7: Escribe una función llamada eliminarElemento que tome un array arr y un elemento
 * elemento , y elimine la primera aparición de ese elemento en el array.
 * @param: {String} texto
 * @return: {number}
 */
export const eliminarElemento = (arr, elemento) => {
    const index= arr.indexOf(elemento);
    if (index != -1){
        arr.splice(index, 1);
    }
    return arr;
}

/**
 * @author: javiilpf
 * @description: Ejercicio 8: Define una función llamada encontrarMaxMin que tome un array 
 * de números arr y devuelva un objeto con las propiedades max y min , que contengan el valor
 *  máximo y mínimo del array, respectivamente.
 * @param: {String} texto
 * @return: {number}
 */
export const encontrarMaxMin = (arr) => {
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    return `El máximo es: ${max} y el mínimo es: ${min}`;
}
/**
 * @author: javiilpf
 * @description: Ejercicio 9: Crea una función llamada buscarElemento que tome un array arr 
 * y un elemento elemento . La función debe devolver el índice de la primera aparición de 
 * elemento en el array, o -1 si no se encuentra
 * @param: {array, elemento} arr, elemento
 * @return: {number}
 */
export const buscarElemento = (arr, elemento) => {
    const index=arr.indexOf(elemento);
    if (index>=0){
        return index;
    }else{
        return '-1';
    }
}

/**
 * @author: javiilpf
 * @description: Ejercicio 10: Escribe una función llamada dividirFragmento que tome un array 
 * arr y un número entero tamano. La función debe dividir el array en fragmentos de tamaño 
 * tamano y devolver un nuevo array con los Fragmentos.
 * @param: {array, number} arr, tamano
 * @return: {number}
 */
export const dividirFragmento = (arr, tamaño) => {
    let fragmentos=[];
    for(let i=0; i<arr.length; i+=tamaño){
        fragmentos.push(arr.slice(i, i+tamaño))
    }
    return fragmentos;
    
}