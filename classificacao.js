var quantidadedealunos = 14

for (contador = 0; contador < quantidadedealunos; contador ++){
    if (contador == 0){
        console.log("o número é zero")
    }
    else if (contador % 2 == 0){
        console.log("o número " + contador + " é par")
    }    else {
        console.log("o número " + contador + " é impar")
    }
}
