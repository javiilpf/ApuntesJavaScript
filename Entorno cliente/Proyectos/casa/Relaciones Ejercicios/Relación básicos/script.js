/**
 * @author: javiilpf
 * @description: Ejercicio 1: Dado un array de números, utiliza los métodos filter y map para obtener los números pares y elevarlos al cuadrado.
 * @param: Array[number] arr
 * @returns: {Array}
 */
export const pares =(arr) => (numeros.filter(arr => arr % 2 === 0)).map(arr => arr ** 2);

/**
 * @author: javiilpf
 * @description: Ejercicio 2: Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios entre ellos.
 * @param: Array{string}
 * @returns: {String}
 */
export const concatEstrings=(arr)=>arr.reduce((acc, numero)=>arr[acc].concat(arr[numero]),0)

/**
 * @author: javiilpf
 * @description: Ejercicio 3: Dado un array de números, usa some para verificar si existe algún número mayor a 100 y every paracomprobar si todos los números son positivos.
 * @param: Array{string}
 * @returns: {Array}
 */
export const verificarMayorCien=(arr)=>arr.some();