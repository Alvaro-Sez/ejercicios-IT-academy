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

  const readFolder = util.promisify(readdir)
  const read = util.promisify(readFile)
  const write = util.promisify(writeFile)
  /* leer fichero */
  /* leer archivos */
  /* escribir info reversed */


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

leerFichero()
  .then(files => files.map(async file=>{leerArchivos(file)}))
  .then(file=>console.log(file))