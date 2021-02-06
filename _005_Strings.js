/**STRINGS
 * Los strings o cadenas son objetos, en JS todo es un objeto
 * -Un string cualquiera es una instancia del objeto String de JS y por lo tanto hereda
 *      todos sus atributos(propiedades y metodos)
 * 
 */


 let cadena = "Hola Mundo"
 let nombre = 'Edwin'
 let apellido = 'Roman'
 let apellido2 = new String("Henao")
 let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue quam in urna bibendum aliquam. Donec a magna feugiat, cursus lacus non, elementum sapien. Morbi in aliquam turpis. Vivamus consequat imperdiet mauris et tempor"
 
 
 console.log(
    cadena, 
    nombre, 
    apellido.toLowerCase(), 
    apellido2.toUpperCase(), 
    lorem.includes('congueasd'),//devuelve true o false si encuentra coincidencia
    lorem.trim(),//quita espacios al comienzo y al final
    lorem.split(""),//separa cada letra y la ubica en una posicion dentro de 1 array
    lorem.split(" "),//separa cada que encuentra un espacio
    lorem.split("or")//separa cada que encuentra coincidencia y ELIMINA la coincidencia
)