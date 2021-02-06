/**VARIABLES
 * 
 * -Alli se guardan los valores
 * -Hoisting(levantado)no habia ambitos de bloque, la variable si no estaba dentro de una funcion
 * JS la tomaba como una variable de ambito global(se almacena en objeto window)
 *  !!WARNING!!al ser global, cualquier otra funcion podria modificarla por error al usar un nombre similar
 * -Con ES6 ya tenemos ambito de bloque usando let. Usar var es una mala práctica
 * -Con let puedo controlar el ambito de cada variable
 */

    var hola = 'Hola Mundo';
    let hello = 'Hello World';
    console.log(hello)
    console.log(hola)
    console.log(window)
    console.log(document)

    //var musica = 'Rock'
    //console.log('Variable musica antes del bloque', musica)
    {
        var musica = 'Pop'
        console.log('Variable musica dentro del bloque', musica)
    }
    //var musica = 'Electronica'
    console.log('variable musica despues del bloque',musica)
    
    
    //let color = 'Amarillo'
    //console.log('Variable color antes del bloque', color)
    {
        let color = 'Azul'
        console.log('Variable color dentro del bloque', color)
    }
    //color = 'Rojo'
    console.log('variable color despues del bloque',color)