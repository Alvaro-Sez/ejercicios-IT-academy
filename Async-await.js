let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
/* Nivell 1
- Exercici 1
Donats els objectes Employees i Salaries, creu una arrow function getEmpleado 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. Creu una altra 
arrow function getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari. */
const getEmpleado = (id)=>{
    return new Promise((resolve,reject)=>{
        if(typeof id == "number"){
        employees.forEach(emplo => emplo.id==id?resolve(emplo):false)
        }
        else reject(new Error(`the id must be a number`))
        return reject(new Error(`the id:${id} does not match`))
    })
}
const getSalario = (obj)=>{
    return new Promise ((resolve,reject)=>{
        let salary
        salaries.forEach(sal => sal.id==obj.id?salary = sal.salary:false)
        if( typeof salary == "number" && salary>=0)resolve(salary)
        else reject(new Error('info about salary is wrong'))
    })
}
/* - Exercici 2
Crea una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el 
nom de l'empleat i el seu salari */
async function getById(id){
    try{
        const obj = await getEmpleado(id)
        const salary = await getSalario(obj)
        console.log(`el nom del empleat es: ${obj.name}, y el seu salari es de: ${salary}`)

    }catch(err){console.log(err.message)}
}
/* Nivell 2
- Exercici 1
Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la 
seva resolve amb una demora de 2 segons. */
async function una_altre_funcio(){
    return new Promise ((resolve)=>setTimeout(()=>resolve('hello after 2000ms'),2000))
   }
async function exercici_nivell_dos(){
        const answer = await un_altre_funcio()
        console.log(answer)
}
/* Nivell 3
- Exercici 1
Capturi tots els errors possibles del Nivell 2. */ 

/* no hi ha cap error posible a les funcions del Nivell 2 , 
ya que no requereixen parametres per funcionar */

/* pero les funcions getSalario y getEmpleado portan la gestio de tots els errors posibles */
