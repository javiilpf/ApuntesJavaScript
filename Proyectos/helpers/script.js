//--------- Declaracion de funciones----------
/** 
 * @autor: javiilpf
 * @version: 1.0.
 * @description: funcion que saluda
 * @param: no tiene
 */
export function saludar() {
    console.log("hola mundo");
}
/**
 * @description: funcion que saluda a un usuario
 * @param {String} nombre 
 * @returns {String}
 */
export function saludar2(nombre) {
    return `Bienvenido: ${nombre ?? "desconocido"}`
}
/**
 * @description: funcion que indica si es positivo negativo o 0 sin usar if
 * @param {number} numero
 * @returns {String}
 * @version: 1.0.
 */
export function numero(numero){
    return numero > 0 ? "positvo" : numero < 0 ? "negativo":"es cero";
    
}
/**
 * @description: funcion que solo acepta numero y que sea positivo negativo o 0
 * @param {number} numero
 * @returns {String}
 * @version: 2.0.
 */
export function numero2(numero) {
    return Number.isInteger(numero)? numero(numero) : "no es un numero";
}

/**
 * @description: funcion que devueve si el numero introducido es primo
 * @param {number} numero
 * @returns {String}
 * @version 1.0
 */
export const esPrimo = (numero = 0) => {
    if (typeof numero == "number") {
      if (numero <= 1) {
        return false;
      } else {
        for (let i = 2; i < numero; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
  
        return true;
      }
    } else {
      return "No es un numero";
    }
  };
  
  /**
 * @description: funcion que devueve el factorial del número que se introduce.
 * @param {number} numero
 * @returns {number}
 * @version 1.0
 */
  export const factorial=(numero)=>{
    let numeroMultiplicado='1';
    for (let a=2;a<=numero;a++){
        numeroMultiplicado*=a;
    }
    return numeroMultiplicado;
}
/**
 * @description: funcion que resuelve una raíz cuadrada
 * @param {number} numero
 * @returns {String}
 * @version 1.0
 */
export const funcion2grado=(a,b,c)=>{
  if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
    const discriminante=Math.pow(b, 2) - 4 * a * c;

    let primeraOpcion= (-b + Math.sqrt(discriminante)) / (2 * a);
    let segundaOpcion= (-b - Math.sqrt(discriminante)) / (2 * a);

    if (primeraOpcion>=1 && segundaOpcion>=1){
      return `Las dos posibles soluciones son: ${primeraOpcion} y ${segundaOpcion}`;
      } else {
        return "No hay soluciones reales."
      }
  } else {
    return "Los valores introducidos no son números."
  }
}

//----------Inicio de la aplicación-----------

console.log(saludar2("Pepe"));

console.log(numero('2'));

console.log (numero2("Manuel"));

console.log(esPrimo(6));