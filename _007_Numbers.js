/**NUMBERS
 * 
 */

 let num1 = 2
 let num2 = 10.99533
 let num3 = new Number(5)
 let num4 = '2.56'

 console.log(num1)
 console.log(num2)
 console.log(num3)
 console.log(num2.toFixed(1))//el parametro dentro de tofixed indica el numero de decimales
 console.log(num1.toFixed(5))
 console.log(parseInt(num2), "este es el parse int")
 console.log(parseFloat(num2),"este es el parse float")
 console.log(typeof num4, 'typeof de un numero entre comillas')
 console.log(typeof num2)
 console.log(num1 + num4, "concatenar numero y string")//esto returna un string
 console.log(num1 + parseFloat(num4), 'numero + parseFloat de un string')//el casting convierte a numero
 console.log(num1 + parseInt(num4), 'numero + parseInt de un string')
 console.log(num2 + Number.parseFloat(num4), 'numero + parseFloat de un string con Number')//el casting convierte a numero
 console.log(num2 + Number.parseInt(num4), 'numero + parseInt de un string con Number')