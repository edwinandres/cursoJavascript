/**ARRAYS */


const a = []
const b = [1, true, 'hola',['1', '2', '3']]

console.log(b.length)
console.log(b[3][1])

//inicializar un array con la propidedad of
const c = Array.of('x','y','z',1 ,2, 3)

//inicializar un array con n numero de posiciones
const d = Array(100).fill(false)
console.log(d)

//estas formas esta en desuso
const e = new Array(1, "2", true)
const f = new Array()
console.log(e)

//push y pop sirven para añadir y eliminar un elemento al final , respectivamente
const colores = ['Amarillo', 'Azul', 'Rojo']
colores.push('Negro')
console.log(colores)
colores.pop()
console.log(colores)

//shif y unshift eliminan y agregan un elemento al inicio , respectivamente
colores.shift()
console.log(colores)
colores.unshift('Morado')
console.log(colores)

colores.forEach(function(element, index){
    console.log(element, index, 'con funcion normal')
})

colores.forEach((element,index)=>{
    console.log(element, index, 'con arrow function')
})