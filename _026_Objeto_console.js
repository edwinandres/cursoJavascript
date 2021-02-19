/**OBJETO CONSOLE
 * 
 */


console.log(console)
console.error('hola')
console.info('hola')
console.clear()
console.warn('hola')

let nombre = 'edwin', apellido='roman', edad=37

console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad)

console.log(window)
console.log(document)//este muestra el html
console.dir(window)
console.dir(document)

console.group('lista1')
console.log('uno')
console.log('dos')
console.group('lista2')
console.log('tres')
console.log('cuatro')
console.groupEnd('final')

console.table(Object.entries(console))

//Console.time
console.time('cuanto tarda mi codigo')

const array = Array(1000000)
for(let i =0; i<array.length;i++){
    array[i] = i
}
console.timeEnd('cuanto tarda mi codigo')

//Console.count
for(let i =0; i<100;i++){
    console.count('paso por aqui')
}

//Console.assert
let x = 3,
    y = 2,
    pruebaXY = 'Se espera que x siempre sea menor que y'

console.assert(x < y, [x, y, pruebaXY])



