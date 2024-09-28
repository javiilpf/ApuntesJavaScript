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
/**
 * @description: Función que devuelve los números que son pares.
 * @param {number} numero
 * @returns {Boolean}
 * @version 1.0
 */
export const esPar = numeros => numeros.filter((numero) => numero%2 === 0);

/**
 * @description: Función que devuelve el último número impar
 * @param {number} numero
 * @returns {number}
 * @version 1.0
 */
export const lastImpar =numeros => numeros.filter((numero) => numero%2 !==0).pop();

/**
 * @description: Funcion que pasa como parámetro para buscar la ciudad y sustituirla por new ciudad
 * @param {Array, String} Array, ciudad
 * @returns {number}
 * @version 1.0
 */

// export const buscarCiudad = (citysArray, oldCity, newCity) => {
//   for (let i=0; i<citysArray.lenght; i++){
//     if(citysArray[1]===oldCity){
//       citysArray[1]=newCity;
//       return citysArray;
//     }
//   }
//   return `No he encontrado la ciudad ${oldCity}`;
// }

export const buscarCiudad = (citysArray, oldCity, newCity) => {
  citys.map(city=>city=== oldCity ? newCity:city);
}
const transacciones =[
	{id:1, mont:8, dirección:'0xabc'},
	{id:2, mont:15, dirección:'0xdfe'},
	{id:3, mont:22, dirección:'0xjkl'},
	{id:4, mont:8, dirección:'0xmnq'}
]
/**
 * @description: Funcion que filtra transacciones cuyo mont sea mayor de 12 ordenadas de mayor a menor
 * @param {Object} transacciones
 * @returns {Object}
 * @version 1.0
 */
export const montMayorMenor=()=>{
  return transacciones.map(transaccion=>transaccion.mount>=12).sort((a,b)=>a-b).reverse();

}

/**
 * @description: Función que busca la dirección de la transacción y cuando la encuentre diga cuantas transacciones hay mayores y menores que esa.
 * @param {Object} transacciones
 * @returns {String}
 * @version 1.0
 */
export const buscarTransaccion = (direccion) => {
  const transaccionNombrada = transacciones.find(transaccion => transaccion.direccion === direccion);

  if (!transaccionNombrada) {
    return `No se encontró una transacción con la dirección: ${direccion}`;
  }

  let transaccionesMenores= 0;
  let transaccionesMayores = 0;
  transacciones.map(transaccion => {
    if (transaccion.mont !== undefined) {
      if (transaccion.mont < transaccionNombrada.mont) {
        transaccionesMenores++;
      } else if (transaccion.mont > transaccionNombrada.mont) {
        transaccionesMayores++;
      }
    }
    return transaccion; 
  });

  return `La dirección: ${direccion} tiene ${transaccionesMenores} transacciones por debajo y ${transaccionesMayores} transacciones por encima.`;
};

const bloques = [
	{ id : 1, hash: "abc123", prevHas: null	},
	{ id : 2, hash: "def456", prevHas:'abc123'},
	{ id : 3, hash: "ghi789", prevHas:'def456'},
	{ id : 4, hash: "jkl012", prevHas:'ghi789'},
]
/**
 * @description: Función que valida los bloques 
 * @param {number} numero
 * @returns {number}
 * @version 1.0
 * */
export const validacionBloques =()=>{
  let respuesta =[];
  for(let i=1; i<bloques.length; i++){
    if (bloques[i].prevHas!==bloques[i-1].hash){
      respuesta.push( 'No se mantiene la integridad');
    } else {
      respuesta.push('Se mantiene la integridad');
    }
  }
  
  return respuesta;
}

const numeros=[2,5,8,9,1,3,2,0,7,4,9];
// usando reduce obten el máximo
//const maximo=numeros.reduce((acumulador, valorActual, indice, miArray)=> Acciones, valorInicial )

const maximo=numeros.reduce((acc, numero)=> acc>numero? acc : numero, numeros[0]);

// usando reduce elimina los duplicados
let num=[];
let dupl=[];
//const duplic=numeros.reduce(acc, numero)=> numero+=1 , numeros[0]);
