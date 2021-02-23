/**OBJETO DATE
 * -Es un prototipo
 */


console.log(Date())

let fecha = new Date()

console.log(fecha)
console.log(fecha.getDate())//trae solo el dia
console.log(fecha.getDay())//devuelve un numero asi= 0 Domingo, 1 Lunes, 2 Martes..., 7 Sábado
console.log(fecha.getMonth())//devuelve numero de mes 0 Enero, 1 Febrero
console.log(fecha.getFullYear())//devuelve el año actual
console.log(fecha.getHours())//hora en formato 00h - 23h
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.toString())//trae lo mismo que el getDate
console.log(fecha.toDateString())//trae solo fecha sin hora
console.log(fecha.toLocaleDateString())//fecha sin hora formato 00/00/0000
console.log(fecha.toLocaleString())//igual al anterior pero con hora
console.log(fecha.toLocaleTimeString())//trae hora actual con am o pm
console.log(fecha.getTimezoneOffset())//me trae 300 , son minutos de diferencia con hora 0
console.log(fecha.getUTCDate())
console.log(fecha.getUTCHours())//hora de londres
console.log(Date.now())//los segundos que han pasado desde el 1 de enero de 1970 (timestamps)

let miCumple = new Date(1982, 11, 12)//el mes se pasa en formato de 0 a 11
console.log(miCumple)

let edad = Date.now()-miCumple
console.log(edad.valueOf())