/**OBJETOS LITERALES
 * -Son una nueva forma de escribir y asignar atributos y metodos
 * -Nos evita tener que asignar variables al objeto, con solo nombrarla de la misma manera
 *      se autoasigna
 */


let nombre = 'Haru', edad = 5
const gato = {
    nombre:nombre,
    edad:edad,
    maullar:function(){
        console.log('miauuu!!')
    }
}
console.log(gato)
gato.maullar()

//con los objetos literales solo hace falta llamar al atributo con el mismo nombre de 
//la variable ya inicializada y para los metodos no requiere usar la palabra function
const cat = {
    nombre,
    edad,
    raza:'Criolla',
    maullar() {
        console.log('remiauuu, miau!')
    }
}
cat.maullar()