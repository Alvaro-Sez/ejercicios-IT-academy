/* Nivell 1------------------------
- Exercici 1
Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en
cada cas. */
function retorna_Promise (check){
    return new Promise((resolve,reject)=>{
        return check
            ?resolve('hello from resolve')
            :reject('hello from reject')
    })
}

retorna_Promise(1)
    .then((info)=>{console.log(info)})

retorna_Promise(0)
    .catch((err)=>{console.log(err)})

/* - Exercici 2
Crear una arrow function que, rebent un paràmetre i una function callback, li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre. */
const arrow_with_cb = (num,cb)=>{
    return (num % 2) == 0
        ? cb('el numero es par')
        : cb('el numero es impar')
}
arrow_with_cb(2,(input)=>{console.log(input)})


/* Nivell 2 ----------------------
- Exercici 1
Donats els objectes employees i salaries, creeu una arrow function getEmpleado que retorni
una Promise efectuant la cerca en l'objecte pel seu id. */
let employees = [
    {id: 1,
    name: 'Linux Torvalds'},
    {id: 2,
    name: 'Bill Gates'},
    {id: 3,
    name: 'Jeff Bezos'}
]
let salaries = [
    {id: 1,
    salary: 4000},
    {id: 2,
    salary: 1000},
    {id: 3,
    salary: 2000}
];
const getEmpleado = (id)=>{
    return new Promise((resolve,reject)=>{
        if(typeof id == "number"){
        employees.forEach(emplo => emplo.id==id?resolve(emplo):false)
        }
        else reject(new Error(`the id must be a number`))
        return reject(new Error(`the id:${id} does not match`))
    })
}
/* - Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre un objecte 
employee i retorni el seu salari. */
getSalario = (obj)=>{
    return new Promise ((resolve,reject)=>{
        let salary
        salaries.forEach(sal => sal.id==obj.id?salary = sal.salary:false)
        if( typeof salary == "number" && salary>=0)resolve(salary)
        else reject(new Error('info about salary is wrong'))
    })
}
/* - Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario,
niant l'execució de les dues promises. */
getEmpleado(3) // <<< input de la id que es vol trobar
    .then( obj=>getSalario(obj) ) // <<< part del Nivell 2 exercici 3, niant l'execucio
    .then( info=>console.log(info) )
/* Nivell 3 
        -Exercici 1 */
    .catch( err=>console.log(err.message) )//<<< part del Nivell 3 exercici 1, manipulacio d'errors


