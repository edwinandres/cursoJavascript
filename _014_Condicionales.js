/**CONDICIONALES
 * -Permiten validar el cumplimiento de ciertas condiciones para ejecutar o no algun
 *      fragmento de codigo
 */


// if - else
let edad = 18

if(edad >= 18){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}

let hora = 11.59

if(hora >= 0 && hora <= 5){
    console.log('Dejame dormir')
}else if(hora >= 6 && hora <12 ){
    console.log('Buenos dias')
}else if(hora >= 12 && hora <= 18){
    console.log('Buenas tardes')
}else{
    console.log('Buenas noches')
}

let eresMayor = (edad >= 18)?"Eres mayor":"Eres menor"

// Switch-case
let dia = 8
switch (dia) {
    case 0:
        console.log('Domingo')        
        break;
    case 1:
        console.log('Lunes')        
        break;
    case 2:
        console.log('Martes')        
        break;
    case 3:
        console.log('Miercoles')        
        break;
    case 4:
        console.log('Jueves')        
        break;
    case 5:
        console.log('Viernes')        
        break;
    case 6:
        console.log('Sabado')        
        break;
    default:
        console.log('Este dia no existe')
        break;
}
