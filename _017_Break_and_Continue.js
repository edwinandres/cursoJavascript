/**BREAK AND CONTINUE
 * -Son instrucciones de control, una rompe el ciclo y la otra se salta iteraciones
 */

let numeros = [1,2,3,4,5,6,7,8,9,0]

//El break va a la estructura padre, o sea el for , y la rompe
for(let i = 0; i < numeros.length; i++){
    
    if(i === 5)break;
    console.log(numeros[i])
}

//El continue va a la estructura padre y le hace saltarse un ciclo
for(let i = 0; i < numeros.length; i++){
    
    if(i === 5)continue;
    console.log(numeros[i])
}