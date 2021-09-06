/* Nivell 1
- Exercici 1
Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres. */
console.log(((a,b)=>a+b)(3,5));

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

------------------------------------------------------------------------------
/* Nivell 3
- Exercici 1
Crear una function creadora d'objectes,
abstraient la definició de les classes. Invocar-amb diferents definicions.

/* clase abstracta */

class ClaseAbstracta {
  constructor(){
    if (new.target === ClaseAbstracta) {
     throw new Error( 'Esta clase es abstracta y no puede ser instanciada' );
    }
  }
}

/* funcio creadora Objectes */

function createObj(){

return (Object.create(ClaseAbstracta.prototype,{constructor : {value : ClaseAbstracta}}))

}

/* Invocacions  */

const Obj1 = createObj(),
Obj2 = createObj(),
Obj3 = createObj()

console.log(typeof Obj1)
console.log(typeof Obj2)
console.log(typeof Obj3)
