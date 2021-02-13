/**ARROW FUNCTIONS
 * - Es una nueva forma de escribir funciones anonimas expresadas
 * - Las funciones declaradas permiten llamarse antes de ser inicializadas debido al
 *      hoisting
 * - Las funciones expresadas no se pueden invocar antes de ser declaradas
 * - El hoisting es: cuando el codigo carga, JS hace un barrido de todo el código y lleva
 *      las funciones a la parte del inicio.
 */

//saludo()
saludar()
//saludando()

//funcion declarada
function saludar(){
    console.log('Hola')
}

//funcion expresada
const saludo = function(){
    console.log('Hola')
}

//arrow function
const saludando = () => {
    console.log('Hola')
}

//arrow function permite una sola linea cuando solo hay una instruccion
//tambien cuando hay un solo parametro no se requieren parentesis
const saludando2 = nombre => console.log(`Hola ${nombre}`)
saludando2('Edwin')


//las funciones normales requieren un return mientras que las arrow function tienen
//un retorno implicito(solo en casos de una sola instruccion)
const sumar = function(a,b){
    return a + b
}
const suma = (a,b) => a + b

console.log(sumar(3,5))
console.log(suma(5,2))  

//recorrido de objetos o arreglos
let numeros = [1,2,3,4,5]
numeros.forEach(function(el, index){
    console.log(el, index)
})
numeros.forEach(el => console.log(el))

//
const gato = {
    nombre:'Luna',
    edad:3,
    raza:'Criolla',
    maullar:function(){
        console.log(this,'this de maullar con funcion anonima')
        //este this hace referencia al objeto gato
    },
    ronronear:()=>{
        console.log(this,'this de ronronear con arrow function')
        //este this hace referencia a window, el objeto global
    },
    saltar(){
        console.log(this)
        //esta es la forma aconsejada para agregar metodos dentro de un objeto
    }
}
function cualquiera(){
    console.log(this)//este this hace referencia a window, el objeto global
}
cualquiera()
gato.maullar()
gato.ronronear()
gato.saltar()
