const fs = require("fs")
const path = require("path")

//Cria array com todas as letras
const texto = fs.readFileSync(path.resolve(__dirname, "texto"), { encoding: "utf-8" }).split("")

const chave = ('abcde').split("")

//converte a chave pra asc
const chaveAsc = chave.map(c => {
    return c.charCodeAt()
})

console.log("chave ASC:",chaveAsc)

//converte a chave pra binario
const chaveBin = chaveAsc.map( c => {
    return c.toString(2).split("")
})

//console.log("chave BIN:",chaveBin)

//Converte texto pra asc
const textoAsc = []
texto.forEach(letra => {
    textoAsc.push(letra.charCodeAt())
})

console.log("texto ASC:",textoAsc)

//converte asc pra binario
let textoBin = []
textoAsc.forEach(letra => {
    textoBin.push(letra.toString(2).split(""))
})

// console.log("texto BIN: ",textoBin)



/* algoritmo OTP */

const letras = []
const byte = []
let bits ;

chaveBin.forEach(chave => {
   chave.push(chave)
})

textoBin.forEach(letra => {
    byte.push(letra)
})
console.log(byte)
bits = byte.map( b => b.map(bit => bit === "0"? 1: 0))
bits = bits.map(bit => bit.join(""))
bits = bits.join("")

console.log("texto criptografado: ",bits)







