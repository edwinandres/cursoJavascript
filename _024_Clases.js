/**CLASES
 * -En JS las clases son azucar sintactica, porque por dentro JS transforma las clases
 *      que escribimos en prototypos
 */


 //funcion constructora con los metodos adentro, no es recomendable porque se duplican
function Animal1(nombre, genero){
    //atributos
    this.nombre = nombre
    this.genero = genero
    //metodos
    this.sonar = function(){
        console.log('Hago ruidos')
    }
}


//la funcion constructora animal quedaria asi en forma de clases
class Animal {
    constructor(nombre, genero) {
        //atributos
        this.nombre = nombre
        this.genero = genero     
    }
    //metodos
    sonar() {
        console.log('Hago ruidos')
    }
}

//Herencia
class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio = tamanio
    }
    //aqui sobreescribimos el metodo sonar
    sonar(){
        console.log('Soy perro y mi sonido es un ladrido')
    }
    ladrar(){
        console.log('Guau guau')
    }
}

const goofy = new Perro('goofy', 'macho', 'mediano')
console.log(goofy, 'goofy')

goofy.sonar()

const mimi = new Animal('mimi', 'hembra')
console.log(mimi)
mimi.sonar()