/**OPERADORES
 * -Aritmeticos
 */

//Operadores Aritmeticos = + - * / % ()

//la siguiente operacion da -20 debido a que se resuelve primero el *
let a = 5 + 5 - 10 * 3
//la siguiente operacion da -10 debido a que se resuelve primero el ()
let b = 5 + (5 - 10) * 3

let division = 5 / 2//returna 2.5
let modulo = 5 % 2//retorna el residuo o sea 1

console.log(a)
console.log(b)


//Operadores relacionales  <  >  <=  >=  ==  === !==  !===

console.log(8 > 9)
console.log(9 > 8)
console.log(7 >= 7)

/*
=    esto es asignacion de valores
==   esto es comparacion de valores
===  esto es comparacion de valor y tipo de dato
*/

console.log(7 == "7")//true
console.log(7 === "7")//false

//Operadores de decremento e incremento

let i = 1
i = i + 2
i += 2
i -= 2
i *= 10
//operador unario
i++
i--
--i
++i

console.log(i)

//Operadores logicos  ! Not, ||  Or , && And