/* Nivell 1
- Exercici 1
Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres. */
((a,b)=>console.log(a+b))(3,5);

/* Nivell 2
- Exercici 1
Crear una arrow function que, rebent un paràmetre, 
retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. */
const get_in_obj = (par)=>{
    obj = {
     att: par
    }
    return obj
}
/* - Exercici 2
Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat.
La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'.
Invocar el mètode decirNombre des de fora de la classe. */
class Persona{
    constructor(nom){
        this.nom = nom
    }

    decirNombre = ()=>{
        console.log(this.nom)
    }
}
let john = new Persona('john')
john.decirNombre();
/* Nivell 3
- Exercici 1
Crear una function creadora d'objectes,
abstraient la definició de les classes. Invocar-amb diferents definicions.
------------------------------------------------------------------------------
si ho he entes be, l'enunciat m'indica que he de crear una classe que contingui una funcio
creadora d'objectes, i la he d'invocar amb diferents parametres(definicions)*/
class object{
    constructor(parameter){
        this.param = parameter
    }
    
    create_obj = ()=>{
        this.objecte = {
            param:this.param
        }
        return console.log(this.objecte)
    }
}
/* invocacions amb diferent definicions */
const obj_A = new object('inside obj A'),
    obj_B = new object('inside obj B'),
    obj_C = new object('inside obj C');
obj_A.create_obj()
obj_B.create_obj()
obj_C.create_obj()
