/**CORTOCIRCUITO
 * -Ya no se usa, los valores por defecto vinieron a remplazarlos
 * -OR, cuando la expresion de la izquierda es verdadera se tomara esa
 * -AND, al contrario de or si la de la izquierda es false se tomara esa (raro pero asi funciona)
 */

function saludarOR(nombre){
    nombre = nombre || "Desconocido"
    console.log(`Hola, buenas tardes ${nombre}`)
}

saludarOR()
saludarOR('Edwin')

console.log('---------------------------------------')

function saludarAND(nombre){
    nombre = nombre && "Desconocido"
    console.log(`Hola, buenas tardes ${nombre}`)
}
saludarAND()
saludarAND('Edwin')

console.log('---------------------------------------')

console.log("hola" || "Valor de la derecha")//muestra el valor de la izquierda
console.log(3 || "Valor de la derecha")//muestra el valor de la izquierda
console.log(true || "Valor de la derecha")//muestra el valor de la izquierda
console.log([] || "Valor de la derecha")//muestra el valor de la izquierda
console.log({} || "Valor de la derecha")//muestra el valor de la izquierda
console.log(false || "Valor de la derecha")//muestra el valor de la derecha
console.log(null || "Valor de la derecha")//muestra el valor de la derecha

console.log('---------------------------------------')


console.log("hola" && "Valor de la derecha")//muestra el valor de la derecha
console.log(3 && "Valor de la derecha")//muestra el valor de la derecha
console.log(true && "Valor de la derecha")//muestra el valor de la derecha
console.log([] && "Valor de la derecha")//muestra el valor de la derecha
console.log({} && "Valor de la derecha")//muestra el valor de la derecha
console.log(false && "Valor de la derecha")//muestra el valor de la izquierda
console.log(null && "Valor de la derecha")//muestra el valor de la izquierda
