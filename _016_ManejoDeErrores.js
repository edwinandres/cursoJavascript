/**MANEJO DE ERRORES
 * -Una de las formas para manejar errores es el try-catch, en el try se ubica el codigo a 
 *      ejecutar , si ocurre un error el bloque catch lo captura, opcionalmente contamos
 *      con el bloque finally que se ejecutara siempre
 * -Podemos usar la palabra reservada throw para personalizar los mensajes de error
 * 
 */

try {
    console.log('Este es el bloque try, aqui se pone el codigo a evaluar')
    noExiste;
    console.log('Segundo mensaje en el try')
} catch (error) {
    console.log('Este es el bloque catch, aqui se captura cualquier error surgido en el try')
    console.log(error)
}finally{
    console.log('Este es el bloque finally, se ejecutara siempre al final de el try catch')
}

try {
    let numero = "hola"
    if(isNaN(numero)){
        throw new Error('El caractér introducido no es un número')
    }
    console.log(numero * numero)
} catch (error) {
    console.log(error)
    
}