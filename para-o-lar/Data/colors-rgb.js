const obj = [{
    "red": [255, 0, 0, 1],
    "royalblue": [65, 105, 225, 1],
    "yellow": [255, 255, 0, 1],

}]


let CriandoObjeto = obj[0]
let valor = Object.values(CriandoObjeto)
let chave = Object.keys(CriandoObjeto)

for(let i=0; i < chave.length; i++){
    console.log(`${chave[i]} RGB: ${valor[i]}`)
}