/* Moduls per els exercicis */
const cp = require('child_process'),
fs = require('fs'),
zlib = require('zlib'),
stream = require('stream')

/* Nivell 1
- Exercici 1
Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon. */
function missatge(){
    setInterval(()=>console.log('missatge cada 1s'),1000);
}
/* - Exercici 2
Creu una funció que, en executar-la, escrigui el seu nom en un fitxer. */
function auto_escriu_nom(oldName,newName){
fs.rename(oldName, newName, err => (err)?console.log(err):false)
}
/* - Exercici 3
Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer. */
function readFile(file){
    fs.readFile(file,'utf8',(err,data)=>{
        if(err) throw err
        console.log(data)
    })
}
/* Nivell 2
- Exercici 1
Creu una funció que comprimeixi el file del nivell 1 */
function Compress(file,fileCompressed){
    const input = fs.createReadStream(file),
    output_compressed = fs.createWriteStream(fileCompressed),
    gzip = zlib.createGzip()
    stream.pipeline(input,gzip,output_compressed,(err)=>{
        if (err) throw err
        console.log('done')
    })
}
/* Creu una funció que llisti per consola el contingut del directori d'usuari.
Utilitzi node Child Processes. */
/* ho vaig fer primer sense Child Process */
function llista_dir(){
fs.readdir('C:/Users',(err,data)=>{
    if (err)throw err
    data.forEach(el=>console.log(el))
    })
}
/* aqui amb Child Process */
function llista_dir_childProcess(){
    let options ={
        cwd:'C:/Users'
    }
    cp.exec('dir',options ,(err,stdout)=>{
        if(err)throw err
        console.log(stdout)
    })
}
/* Nivell 3
- Exercici 1
Creu una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament,
 a partir del fitxer de l'exercici inicial. */
function encoding_hex_b64(file_inicial){
const input_hex = fs.createReadStream(file_inicial,{encoding:'hex'}),
input_b64 = fs.createReadStream(file_inicial,{encoding:'base64'}),
output_hex = fs.createWriteStream('output_hex.txt'),
output_b64 = fs.createWriteStream('output_b64.txt')

stream.pipeline(input_hex,output_hex,(err)=>{ /* hex encoder */
    if (err) throw err
    console.log('done hex')
})
stream.pipeline(input_b64,output_b64,(err)=>{ /* base64 enconder */
    if(err) throw err
    console.log('done b64')
})
}
encoding_hex_b64('hi.txt')
/*Creu una funció que guardi en disc els fitxers del punt anterior encriptats amb algorisme 
aes-192-cbc, i esborri els fitxers inicials.*/
/* inicio el metodo de encriptacion */

let iv = crypto.randomBytes(16)
let key ='123456781234567812345678' /* donem clau de 192 bites, en 24 bytes */
const cipher = crypto.createCipheriv('aes-192-cbc',key,iv),
decipher = crypto.createDecipheriv('aes-192-cbc',key,iv)

function encriptar_hex_b64(hex_file,b64_file){
    
}

/* Creu una altra funció que desencripti i descodifiqui els fitxers finals
tornant a generar els inicials. */