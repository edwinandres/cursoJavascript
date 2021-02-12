/**DESTRUCTURING
 * -Es una nueva de forma de asignar valores, en especial a arreglos y objetos
 * -Para que el desctructuring funcione se requiere definirlas con el mismo nombre en 
 *      el caso de los objetos
 */

//como se hacia antes
const numeros = [1,2,3]
const uno = numeros[0]
const dos = numeros[1]
const tres = numeros[2]
console.log(uno, dos , tres)

//como se hace ahora aplicando destructuring
const[a,b,c] = numeros
console.log(a,b,c)

const edwin = {
    nombre:'Edwin',
    apellido:'Roman',
    edad:38
}

const{apellido, edad, nombre} = edwin
console.log(nombre, apellido, edad)
