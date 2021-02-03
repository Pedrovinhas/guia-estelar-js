/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar 
uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/


let receita = {
    incomes = [
        5000, 
        3200,
        345.30
    ],
    expenses = [
        3000.20, 
        45.35,
        123.45,
        435.20
    ]

}

// Soma da expense e income
function sum (array) {
    let total = 0
    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance () {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOK = total >= 0

    let balanceText = "negativo"
    if (itsOK) {
        balanceText = "Saldo positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}