/**
 * EXPRESIONES REGULARES
 * -Se usan para validar que cadenas de string o numeros contengan o no contengan
 * determinados valores
 * la letra i se usa como bandera para ignorar mayusculas minusculas
 * la letra g va buscar todas las coincidencias, no solo la primera
 * \d se usa para buscar digitos del 0 al 9
 */

let cadena = "Lorem Ipsum lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

let expReg = new RegExp("lorem","")
let expReg2 = /lorem/ig

let expReg2 = /lorem{1}/ig//que este al menos una vez
let expReg2 = /lorem{3}/ig//que este 3 veces
let expReg2 = /lorem{1,3}/ig//que este entre 1 y 3 veces
let expReg2 = /lorem/ig

//las dos siguientes son iguales
let expReg3 = /\d/
let expReg3= /[0,9]/

console.log(expReg.test(cadena))
console.log(expReg.exec(cadena))