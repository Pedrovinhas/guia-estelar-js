// If.. Else
let temperature = 36.9
let highTemperature = temperature >= 37.5 
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre Alta')
} else if (mediumTemperature) {
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}

// Switch
function calculate (number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            break
        case '-':
            break
        case '*':
            break
        case '/':
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))

// throw
function sayMyName (name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log(name)
}

// try... catch
try {
    sayMyName('Mayk')
} catch (e) {
    console.log(e)
}

console.log('após ao try/catch')