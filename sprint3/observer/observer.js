/* he permitido que el programa envie el mensaje de un usuario a los usuarios que estan suscritos al mismo topico, incluyendo al propio usuario, es decir el usuario que envia el mensaje tambien recibira la alerta
circular del topico anunciando que un nuevo mensaje ha sido recibido, segun el enunciado no entiendo que haya
ningun problema en esto.. */

const events = require('events'),
emitter = new events.EventEmitter();

let suscripcions = []

emitter.on('newMsg', (name, topic, msg)=> comunicarMembresTopic(name,topic,msg))

function Usuari (name){
  this.name = name
  this.enviarMissatge = function(msg){
    console.log(`\nEl ${name} envia un missatge que diu:\n${msg}\n`)
    let topicSuscrit
      suscripcions.forEach(el=>
    { 
      if(name == el.usuari.name )
      {
      topicSuscrit = el.topic.tema
      }
    })
    emitter.emit('newMsg',name, topicSuscrit, msg)
  }
}
  
function Topic (tema) {
    this.tema = tema
}

function Suscripcio (usuari,topic){
  this.usuari = usuari
  this.topic = topic
}

function comunicarMembresTopic(nom,topic,msg){
  suscripcions.forEach(el => 
  {
    if(el.topic.tema === topic){
      console.log(`CONSOLA de ${el.usuari.name}:\ns'ha penjat un nou missatge de l'usuari: ${nom}, sobre el topic: ${topic}\n el missatge diu: ${msg}\n`)
    }   
  })
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


Joan.enviarMissatge('parlem de futbol')
Pau.enviarMissatge('Parlem de ciencia')


