/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/


/*ejercicio 1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
function contarCaracteres(texto) {
    let numeroCaracteres = texto.length;
    console.log(numeroCaracteres);
}

contarCaracteres("hola mundo")

/*ejercicio 2 Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
function recortarCadena(cadena, cantidad){
    let subcadena = cadena.substring(0, cantidad)
    let subcadena2 = cadena.slice(0,cantidad)
    console.log(subcadena)
    console.log(subcadena2)
}

recortarCadena("hola mundo", 6)

/*ejercicio 3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
function convertirStringAArray(cadena){

    let array = cadena.split(" ", 2 )
    console.log(array)
}
convertirStringAArray("Hola mundo que tal")

/*ejercicio 4 Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function repetirTexto(texto, cantidad){
    for(let i = 1; i<=cantidad; i++){
        console.log(texto, i)
    }
}

repetirTexto("hola", 5)

