// atividade 2 da UC8 = codificar o fluxograma de cadastro de participantes em um evento

// ETAPA 1
var AnoMesDiaAtual = 2021_10_05
var AnoMesDiaDesejado = 2021_10_01
// a data deve ser inserida no formato AAAA_MM_DD

if (AnoMesDiaDesejado < AnoMesDiaAtual){
    console.log ("Data indisponível, tente novamente.")
}else{
    console.log("Agendamento disponível, por favor informe nome e idade da participante.")
}

// ETAPA 2
var participante = new Object()
participante.nome = "Abel"
participante.idade = 17

if (participante.idade < 18){
    console.log("Cadastro inválido para menores de idade.")
}else{
    console.log("Cadastro válido")
}

// ETAPA 3
var listaParticipante = ["Abel", "Maria"];
listaParticipante.push("Jose");
console.log(listaParticipante)

if (listaParticipante.length < 3){
    console.log("ainda tem vaga")
}else if (listaParticipante = 3){
console.log("Atenção, limite máximo de pessoas atingido.")
}else{
    console.log("Limite de pessoas excedido, cadastro não finalizado")
}
