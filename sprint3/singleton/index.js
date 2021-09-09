/* He permitido que la clase Jugador , pueda ser instanciada repetidas veces, por lo que se pueden iniciar varios jugadores
con el mismo nombre, pero en el proceso de creacion del Jugador, tambien se crea una instancia de la clase Marcador, y solo en esta clase he implementado
el singleton, como pide el enunciado.*/

const inquirer = require('inquirer')

/* data */
let instanceList = [],
playerList = [],
marcadorList = []
/* ----------------- */


const optionsMenu = {
  "Inicializar nuevo jugador y marcador": () => createPlayer(),
  "listar jugadores" : () => listAllPlayers(),
  "listar marcadores": () => listAllScores(),
  "sumar puntos": () => AddPoints(),
  "salir": () => console.log('Good bye!')
}

function createPlayer(){

  inquirer.prompt({
    name:'input',
    message:'\n\nEscribre un nombre para el jugador',
    default: null
  })
    .then(answer => {
      let player = new Jugador(answer.input)
      let marcador = Marcador.assignMarcador(player.name)
      playerList.push(player) 
      console.log(`nuevo jugador con nombre ${player.name} creado`)
      if(typeof marcador === 'object'){
        marcadorList.push(marcador)
        console.log(`Nuevo marcador asignado a este jugador \n`)
      }
      instanceList.push(player.instanceName)
      console.table(playerList)
      menu() 
    })
}

const listAllPlayers = () => {
  console.table(playerList)
  setTimeout(menu,1000)
}
const listAllScores = () => {
  console.table(marcadorList)
  setTimeout(menu,1000)
}


function menu(){

  inquirer.prompt({
    type:'list',
    name:'input',
    message:`\n\nEscoje una opcion del menu \n`,
    choices: Object.keys(optionsMenu),
    default: null
  })
    .then(({input}) =>{
      let fn = optionsMenu[input]
      fn()
    })
}

function AddPoints(){
  inquirer.prompt({
    name:'input',
    message:`Escribre el nombre del jugador que se le sumara un punto`,
    default: null
  })
    .then(answer=>{
      if(marcadorList.length){
        for(i in marcadorList){

          if (marcadorList[i].instanceName == answer.input){
            marcadorList[i].addPoint()
            console.log(`\npunto añadido\n`)
            listAllScores()
            break;
          }
          else if( (i == (marcadorList.length - 1) )){
            console.log(`\nno existe un jugador con este nombre\n`)
            setTimeout(menu,1000)
          }
      }
      }else{
        console.log('no existe jugador con este nombre')
        setTimeout(menu,1000)
      }
    })
}



function Jugador (name){
  this.name = name
  this.instanceName = name
}

class Marcador {
  constructor (instanceName){
    this.instanceName = instanceName 
    this.points = 0
  }
  /* implementacion singleton <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
  static assignMarcador (instanceName){
    if( !(instanceList.includes(instanceName)) ){
      instanceList.push(instanceName)
      return new Marcador(instanceName)    
    }else{
      console.log(`El jugador con nombre: ${instanceName} ya tiene asignado un Marcador`)
    }
  }
  addPoint(){
    this.points = this.points + 1
  }
}





menu()
