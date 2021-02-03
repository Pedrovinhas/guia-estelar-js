/* 
let score = 90
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

switch (score) {
    case scoreA: scoreFinal = "A"
    break;
    case scoreB: scoreFinal = "B"
    break;
    case scoreC: scoreFinal = "C"
    break;
    case scoreD: scoreFinal = "D"
    break;
    case scoreF: scoreFinal = "F"
    break;
    default: 'Nota inválida'
}

console.log(scoreFinal)

*/
let score = 90
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

console.log(scoreFinal)


// Função

function getScore (score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

let scoreFinal;
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal

}


console.log(getScore(101))
console.log(getScore(5))
console.log(getScore(10))
console.log(getScore(45))
console.log(getScore(-5))
console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(71))
