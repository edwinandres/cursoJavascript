/**METODOS ESTATICOS GETTER Y SETTER
 * -Los metodos estaticos se pueden llamar sin necesidad de instanciar la clase
 * -Los metodos getter y setter son metodos especiales que nos permiten asignar y consultar
 *      valores de una clase. Estos metodos no se trabajan como metodos sino como atributos
 */

 /**CLASES
 * -En JS las clases son azucar sintactica, porque por dentro JS transforma las clases
 *      que escribimos en prototypos
 */



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
        this.raza = null
    }
    //aqui sobreescribimos el metodo sonar
    sonar(){
        console.log('Soy perro y mi sonido es un ladrido')
    }
    ladrar(){
        console.log('Guau guau')
    }
    static queEres(){
        console.log('Soy el mejor amigo del hombre')
    }
    get getRaza(){
        return this.raza
    }
    set setRaza(raza){
        this.raza = raza
    }

}

const goofy = new Perro('goofy', 'macho', 'mediano')
console.log(goofy, 'goofy')

goofy.sonar()

const mimi = new Animal('mimi', 'hembra')
console.log(mimi)
mimi.sonar()
Perro.queEres()

//los getter y setter JS los usa como atributos
goofy.setRaza = 'dalmata'
console.log(goofy.getRaza)