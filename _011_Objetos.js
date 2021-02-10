/**OBJETOS
 * -Es importante usar const al trabajar con objetos
 * -Es una coleccion de llaves-valores
 * -Dentro de un objeto a las variables se les llama atributos y a las funciones se 
 *      les llama metodos
 * -Se utiliza notacion de punto y notacion de corchetes para acceder a sus atributos
 */

const b = {}
console.log(b)

//no es recomendable usar el prototipo object para crear objetos
const c = new Object()

const edwin = {
    nombre: 'Edwin',
    apellido: 'Roman',
    pasatiempos:['aprender', 'programar', 'meditar'],
    contacto:{
        email:'pazamoryperdon@gmail.com',
        github:'elexier'
    },
    saludar:function(){
        console.log('Hola')
    },
    decirMiNombre:function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
    }
}
console.log(edwin)
console.log(edwin.nombre)
console.log(edwin["nombre"])
console.log(edwin.pasatiempos[1])
edwin.saludar()
console.log(edwin.contacto.email)
edwin.decirMiNombre()
//Object.keys me permite listar todas las llaves del objeto en cuestion
console.log(Object.keys(edwin))
//Object.values me permite listar todos los valores del objeto
console.log(Object.values(edwin))
//averiguar si el objeto tiene alguna propiedad con nombre xxx
console.log(edwin.hasOwnProperty('saludar'))