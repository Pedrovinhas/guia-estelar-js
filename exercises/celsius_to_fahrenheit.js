/* ### Celsius para Fahrenheit

    Crie uma função que receba uma string em celsius ou 
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F-32) * 5/9
    F = C * 9/5 + 32
*/

// transformDegree ('50F')
function transformDegree (degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    // Fluxo ideal, F para C (passamos uma função dentro de uma variável)
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo, C para F
    if(celsiusExists) {
    let updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    let formula = celsius => (celsius * 9/5) + 32
    let degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}