/**PROTOTYPES
 * -JS es un lenguaje multiparadigma(podemos usar programacion funcional, orientada a objetos, etc)
 * -La orientacion a objetos es muy distinta a JAVA o C
 * -Las clases en JS son una azucar sintactica porque finalmente el navegador convierte
 *      estas clases a funciones prototipicas
 * -Clases, objetos, atributos y metodos (esto es POO)
 * -Una clase es un modelo a seguir para generar instancias, 
 * -Lo recomendables es asignar los atributos dentro de la funcion constructora y los metodos
 *      asignarlos por fuera al prototype
 */

 //Aqui tenemos dos objetos iguales, la idea de los prototipos es no tener que hacer esto
const animal = {
    nombre:'Snoopy',
    sonar(){
        console.log('Hago sonidos porque estoy vivo')
    }
}

const animal2 = {
    nombre:'Lola Bunny',
    sonar(){
        console.log('Hago sonidos porque estoy vivo')
    }
}

console.log(animal)
console.log(animal2)


//funcion constructora con los metodos adentro, no es recomendable porque se duplican
function Animal(nombre, genero){
    //atributos
    this.nombre = nombre
    this.genero = genero
    //metodos
    this.sonar = function(){
        console.log('Hago ruidos')
    }
}



//funcion constructora pero los metodos se agregan al prototipo
function Animal2(nombre, genero){
    //atributos
    this.nombre = nombre
    this.genero = genero    
}
//estos metodos no entraran en las instancias, quedaran solo en el prototype animal
Animal2.prototype.sonar = function(){
    console.log('Hago ruidos')
}
Animal2.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`)
}


const snoopy = new Animal('snooy','macho'),
    lola = new Animal('Lola Bunny', 'hembra')

console.log(snoopy, lola)