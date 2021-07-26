
/* Nivell 1 */
/* - Exercici 1
Crear una funció que imprimeixi en consola el nom d'usuari sent invocada
externament i passant el nom com a paràmetre. 
*/
function nom(nom){
    return typeof nom == "string"
    ?console.log(nom)
    :console.log("string required")
}

/* Nivell 2 */
/* - Exercici 1
Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, 
creant les variables i referenciant en la impressió del missatge */
let nombre = `Alvaro`,
cognom = `Gurrea`;
function nom_cognom(n,c){
    
    console.log(`El nom del usuari es: ${n}, el cognom del usuari es: ${c}`)
    
}
/* - Exercici 2
Invocar la funció mitjançant template literals */
nom_cognom (`${nombre}`,`${cognom}`)


/* Nivell 3 */
/* - Exercici 1
Crea una matriu de deu funcions i empleni-la mitjançant un bucle.
Cada funció comptarà del 0-9 imprimint-ho per pantalla. 
Invoqui cada funció de l'array iterativament.
Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades */

function exercici_nivell_tres(){
    /* defino lo que va en cada posicion del array */
    function compte_fins_nou(){
        let n = 0
        while (n!=10){
            console.log(n)
            n++
        }
    }
    /* logica del ejercicio */
    let matriu = [],
    count = 1
    for(let i=0;i<10;i++) matriu[i]=compte_fins_nou
    matriu.forEach(f=>{
        f()
        console.log(`loop num: ${count} acabat`)
        count++
    })
}
/* - Exercici 2
Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi 
per pantalla el nom d'usuari rebut com a paràmetre */
(function(nom){console.log(`${nom}`)})('Alvaro')