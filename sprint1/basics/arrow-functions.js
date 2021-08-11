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
/* funcio constructora */
function perro(nom,edad,raza){
    this.nom = nom,
    this.edad = edad,
    this.raza = raza
}
perro.prototype.ladrar = function (){
    console.log('guau guau!')
}
perro.prototype.hablar_sobre_mi_mascota = function (){
    console.log(`tengo un perro de raza ${this.raza} que se llama ${this.nom}, y tiene ${this.edad} años`)
}
/* invocacions amb diferent definicions */
console.log('Iniciando primera clase abstracta  -----mi perro rex-----')
const rex = new perro('Rex','7','pastor aleman')
rex.ladrar()
rex.hablar_sobre_mi_mascota()

console.log('Iniciando segunda clase abstracta -----mi perro donald-----')

const donald = new perro ('donald','3','bull-dog')
donald.ladrar()
donald.hablar_sobre_mi_mascota()
