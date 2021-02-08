/**FUNCIONES
 * -Una funcion es un bloque de codigo autocontenido
 * -Se define una sola vez y se puede reutilizar cuantas veces se quiera
 * -Puede o no recibir parametros
 * -Puede devolver o no un resultado
 * -Se considera un objeto de primera clase
 * -Se pueden pasar como argumentos y retornar como valores
 * -Tenemos funciones declaradas y funciones expresadas
 * -Los parentesis al final de la invocacion son los que hacen que se ejecute
 * -Puede tener valores por defecto que se emplearan cuando la funcion se invoque sin parametros
 * -Una funcion declarada se puede invocar antes de declararse
 * -Una funcion expresada no se puede invocar antes de declararse
 */


//FUNCIONES DECLARADAS
function funcionDeclarada(){
    console.log(1)
    console.log(2)
    console.log(3)
}

function funcionQueRetornaValor(){
    console.log("Uno")
    return("La funcion devuelve esta cadena de texto")
    console.log("Dos")//Esta linea no se ejecuta debido al return de la anterior linea
}

//INVOCACION DE FUNCIONES
funcionDeclarada()
funcionQueRetornaValor()
let valorRetornado = funcionQueRetornaValor()
console.log(valorRetornado)

saludar("Luna", 3)
saludar()

//FUNCION CON ARGUMENTOS
function saludar(nombre='Desconocido', edad=0){
    console.log(`Hola , mi nombre es ${nombre} y tengo ${edad} años`)
}

//FUNCION DECLARADA VS FUNCION EXPRESADA
funcionDeclarada()

function funcionDeclarada(){
    console.log('Esto es una funcion declarada')
}

funcionDeclarada()


fExpresada() //esto genera error, no puedes invocar una funcion expresada antes de inicializarla
//funcion anonima
const fExpresada = function(){
    console.log('Esto es una funcion expresada')
}
fExpresada()