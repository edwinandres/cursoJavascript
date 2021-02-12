/**PARAMETROS REST Y OPERADOR SPREAD
 * 
 * -Los parametros rest son una forma virtul de ir agregando parametros infinitos
 * -El operador spread o operador de propagacion
 */

//Parametros rest
function sumar(a,b,...c){
    resultado = a + b
    c.forEach(function(num){
        resultado += num
    })   
    return resultado
}
console.log(sumar(1,2,3,4))


//Operador spread
const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0]
console.log(arr1,arr2)

//al usar operador spread se concatenan en un solo arreglo
const arr3 = [...arr1 , ...arr2]
console.log(arr3,'array3')
