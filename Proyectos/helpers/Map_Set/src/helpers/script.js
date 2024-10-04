const contarFrecuenciaPalabras =(texto)=>{
    const wordCount=new Map();
    texto.split(" ").foreach((word)=>{
        wordCount.set(word, (wordCount.get(word) || 0)+1)
    });
    return wordCount;

}

/**
 * @description:Crear una funcion que pase como parámentro un array y Verifica que todos los elementos sean únicos.
 * @param: {Array} arr
 * @return: boolean
 */
const verifyUnicity =arrayTexto => arrayTexto.length === new set(...arrayTexto).size;


/**
 * @description: Tengo que hacer un algoritmo que le pase un array de numeros y le cambie aleaatoriamente las posiciones de cada numero
 * @description: 
 */