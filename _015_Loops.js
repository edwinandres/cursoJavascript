/**LOOPS
 * -Estructuras que repiten la ejecucion de un fragmento de codigo mientras se cumpla
 *      una condición especifica
 */

//while
let count = 10

while(count < 10){
    console.log('while',count)
    count++
}

//do while
do {
    console.log('do while',count)
    count++
} while (count < 10);

//for (imperativo)
for(let i = 0 ; i < 10; i++){
    console.log('for', i)
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log('Numeros.length', numeros.length)
for(let i = 0 ; i < numeros.length; i++){
    console.log(numeros[i])
}


//otros tipos de for mas declarativos (for in y for of)
const edwin = {
    nombre: 'Edwin',
    apellido: 'Roman',
    edad: '37'
}
//for in permite recorrer solo las propiedades de un objeto
for(let key in edwin){
    console.log(key, edwin[key])
}
//for of permite recorrer todos los elementos de cualquier objeto iterable
for(const [key,value] of Object.entries(edwin)){
    console.log(key, value)
}
//recorrido de un array con for of
for(const elemento of numeros){
    console.log(elemento)
}
//con for of podemos recorrer strings
let saludo = 'Hola como estas'
for(const letra of saludo){
    console.log(letra)
}