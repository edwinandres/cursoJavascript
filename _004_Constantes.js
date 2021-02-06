/**CONSTANTES
 * 
 * -Se usan cuando sabemos que su valor no va a cambiar durante el tiempo de ejecucion de la aplicacion
 * -Siempre requieren un valor inicial
 * -En los tipos de datos complejos funciona ligeramente distinto, porque sus valores internos si pueden cambiar
 *      pero no puede cambiar su tipo de dato
 * -Por ejemplo yo como persona (objeto) voy cambiando mis atributos a lo largo de mi vida, pero jamas dejo de 
 *      ser yo mismo. Lo mismo pasa con los datos compuestos,
 *      aunque un array cambia sus elementos, no deja de ser un array. Por eso se pueden declarar como const
 */

    const objeto={
        nombre:'Edwin',
        edad:38
    }

    const colores = ['Azul','Amarillo','Rojo']

    console.log(objeto)
    console.log(colores)

    objeto.correo='edarom@gmail.com'
    colores.push('Morado')
    console.log(objeto, colores)
    