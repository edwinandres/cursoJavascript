/**
 * FUNCION ANONIMA AUTOEJECUTABLE
 */


//function(){}()//el ultimo parentesis es el que la ejecuta
// pero para que eso funciones hay que encerrar a la funcion en un parentesis

//en este caso si hace falta poner punto y coma
(function(){
    console.log("mi primer funcion anonima")
})();

(function(d,w,c){
    console.log("Mi segunda funcion anonima autoejecutable")
    console.log(d)
    console.log(w)
    c.log(c)
})(document, window, console);