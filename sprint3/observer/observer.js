/* - Exercici 1 - Observer
1 - Creu una Aplicació que creï diferents objectes Usuari.
2 - L'aplicació podrà crear diferents topics
3 - els usuaris es poden subscriure.
4- Quan un Usuari afegeixi un missatge, s'imprimirà per consola des del topic. També ho
  imprimiran per consola cadascun dels usuaris que estiguin subscrits al topic (rebran el missatge). 
5- Creu un topic amb un usuari i un altre amb dos, i mostri la recepció dels missatges pels 
  usuaris. Utilitzi el modulo events. */

const events = require('events'),
emitter = new events.EventEmitter();

let topics = [],
usuaris = [],
suscripcions = []

emitter.on('newMsg', (name)=>console.log(name))

function Usuari (name){
  this.name = name
  this.enviarMissatge = function(msg){
    console.log(msg)
      emitter.emit('newMsg',name)
  }
}

function Topic (tema) {
    this.tema = tema

    this.missatgeAlert = function(nom){
      console.log(`nou missatge sobre: ${tema}, de part de l'usuari ${nom}`)
    }
}

function Suscripcio (usuari,topic){
  this.usuari = usuari
  this.topic = topic
}

  /* creacio usuaris */
let Joan = new Usuari('Joan')
let Pau = new Usuari('Pau')
let Marta = new Usuari('Marta')


  /* creacio topics */
let futbol = new Topic('futbol')
let ciencia = new Topic('ciencia')


  /* suscripcions */
suscripcions.push(new Suscripcio(Joan, futbol))
suscripcions.push(new Suscripcio(Pau, ciencia))
suscripcions.push(new Suscripcio(Marta, ciencia))

Joan.enviarMissatge('futbol de part de joan')
futbol.missatgeAlert(Joan.name)





