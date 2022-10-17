/*

Sistema de gastos familiar

criar um objeto que possuirá 2 propriedades, ambas do tipo array:

depois crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo negativo ou positivo, seguindo o valor do saldo. 

*/



let family = {
    incomes: [1000, 2000, 300, 4343, 2313.123],
    expensives: [545, 232, 100, 293.232]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalence(){
    const calculatesIncomes = sum(family.incomes)
    const calculateExpensives = sum(family.expensives)

    const total = calculatesIncomes - calculateExpensives

    let mensagem
    if(total >= 0){
        mensagem = "positivo :)"
    } else{
        mensagem = "negativo :("
    }

    console.log(`O seu saldo está ${mensagem}, R$ ${total.toFixed(2)}`);
}

calculateBalence()