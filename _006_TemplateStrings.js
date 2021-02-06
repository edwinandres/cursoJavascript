/**TEMPLATE STRINGS
 * 
 * -Facilitan la concatenación
 */


    let nombre = 'Edwin'
    let apellido = 'Roman'
    let saludo = 'Hola mi nombre es' + nombre +' '+ apellido 

    //lo siguiente se llama interpolacion de variables(usando Template Strings)
    let saludo2 = `Hola, mi nombre es ${nombre} ${apellido}`

    console.log(saludo, saludo2)

    let ul ="<ul> <li>Primavera</li><li>Verano</li><li>Invierno</li><li>Otoño</li></ul>";
    let ul2="<ul>"+
                "<li>Primavera</li>"+
                "<li>Verano</li>"+
                "<li>Invierno</li>"+
                "<li>Otoño</li>"+
            "</ul>";

    let ul3=`<ul> 
                <li>Primavera</li>
                <li>Verano</li>
                <li>Invierno</li>
                <li>Otoño</li>
            </ul>`;


    console.log(ul)
    console.log(ul2)
    console.log(ul3)
