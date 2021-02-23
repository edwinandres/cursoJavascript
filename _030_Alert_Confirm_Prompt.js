/**ALERT CONFIRM Y PROMPT
 * -Funciones basicas para interaccion con el usuario
 */


console.log(window)
// window.confirm("Esto es un confirm")
// const hola = window.prompt('Esto es un prompt le permite al usuario ingresar un valor')
// window.alert('Esto es un alert')
// console.log(hola)

//no es necesario poner el window
let confirmacion = confirm("Esto es un confirm")
let aviso = prompt('Esto es un prompt le permite al usuario ingresar un valor')
let alerta = alert('Esto es un alert')
console.log('confirmacion',confirmacion)//devuelve true o false
console.log('aviso',aviso)//devuelve lo que se escribio si el usuario da en aceptar
console.log('alerta',alerta)