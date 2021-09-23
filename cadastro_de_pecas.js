var listadepecas = ["peca 1", "peca 2", "peca 3", "peca 4", "peca 5", "peca 6", "peca 7", "peca 8", "peca 9", "peca 10", "p1"]
console.log("quantidade de pecas")

if (listadepecas.length > 10){
    console.log("capacidade insuficiente")
} else {
    console.log("capacidade suficiente")
}

console.log('quantidade de caracteres')

for (contador = 0; contador < listadepecas.length; contador ++){
var pecaatual = listadepecas[contador]

if(pecaatual.length < 3){
    console.log(pecaatual +": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada"  )
}else {
    console.log(pecaatual +": a peça pode ser cadastrada")
}
}

console.log("peso da peça")

var pesodapecaemgramas = 110

if (pesodapecaemgramas >= 100){
    console.log("Peso suficiente")
}else{
    console.log("peso insuficiente")
}





