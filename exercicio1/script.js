function calculo (num){
    let soma = (num %2===0)
    if(soma===true){
        console.log("É par!")
    }else if(soma===false){
        console.log("É impar!")
    }else{
        console.log("Número invalido!")
    }
}
num = Number(prompt("Digite seu melhor número!"))
console.log(calculo(num))



// # Exercício 1

/*Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.
*/