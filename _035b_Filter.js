// Durations are in minutes
 
var tasks = [
 
    {
   
      'name'     : 'Write for Envato Tuts+',
   
      'duration' : 120
   
    },
   
    {
   
      'name'     : 'Work out',
   
      'duration' : 60
   
    },
   
    {
   
      'name'     : 'Procrastinate on Duolingo',
   
      'duration' : 240
   
    }
   
  ];

console.log("hola")

let difficult_task = tasks.filter(function (task){
    return task.duration >=120
})

let diff2 = tasks.filter(task => task.duration >= 120)

console.log(tasks)
console.log(diff2)

let numeros = [1,2,3,4,5],
    total = 0;

    numeros.forEach(numero => total+=numero)
    console.log(total)

    let total2 = numeros.reduce((previous, current, index) => {
        console.log("previous: ",previous, "current: ", current, "currente iteration: ", (index))
        return previous + current
    })
   
    console.log("total 2", total2)

    let total_time = tasks.reduce((prev, curr) =>{ 
        console.log("esto es prev duration",prev.duration, "preve.curr",curr.duration)
        return [...prev +curr.duration]
    })

    console.log(total_time)

    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
