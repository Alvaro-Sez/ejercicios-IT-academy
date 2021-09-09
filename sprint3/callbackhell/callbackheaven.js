const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const util = require('util')

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");


const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


/* promisifico las respuestas de readdir, readFile, writeFile */

const readFolder = util.promisify(readdir)
const read = util.promisify(readFile)
const write = util.promisify(writeFile)
 

let fileList = [],
promises =[]

/* defino la funcionalidad del programa */

const leerFichero = () =>{
  return readFolder(inbox)
}
const leerArchivos = (file) =>{
  let dir = join(inbox, file)
  return read(dir,'utf8')
}

const escribirReversed = (file,info) =>{
  let dir = join(outbox,file)
  return write(dir,reverseText(info))
}

/* callback "heaven" xD */

leerFichero()
  .then(files => fileList = files)
  .then(data => fileList.map( async file => promises.push(leerArchivos(file)) ))
  .then(data => Promise.all(promises))
  .then(data => data.forEach((el,index)=>escribirReversed(fileList[index],el)))
  .catch(err => console.log(err))  

  
