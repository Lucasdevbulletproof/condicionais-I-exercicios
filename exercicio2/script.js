const idade = Number(prompt("Digite sua idade"))
const ensinoMedio = confirm("Concluiu o ensino médio?")
const faculdade = confirm("Está cursando faculdade?")


function valores(idade, ensinoMedio, faculdade){
    if(idade >= 18){
        console.log("Maior de Idade")
    }else{
        console.log("Menor de idade")
    }
    if(ensinoMedio===true){
        console.log("Ensino Médio Completo")
    }else{
        console.log("Ensino Médio Incompoleto")
    }
    if(faculdade===true){
        console.log("Parabéns você fa faculdade")
    }else{
        console.log("Poxa você não faz faculdade")
    }
}
valores(idade, ensinoMedio, faculdade)
