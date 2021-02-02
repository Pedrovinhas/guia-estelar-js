/*
    Type conversion(typecasting) vs Type coersin

    * Alteração de um tipo de dado para outro

*/

// Type Coersion
console.log("9" + 5)

// Type Conversion
console.log(Number("9") + 5)

// Strings em número
let string = "123";
console.log(Number(string))

let number = 321;
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um número

// Caractére em uma palavra
let word = "Paralelepípedo"
console.log(word.length)

// Dígitos em um número
let number = 1234;
console.log(String(number).length)

// Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgula.
let number = 345.33453443;
console.log(number.toFixed(2).replace(".", ","))

// Transformando letras minúsculas em maiúsculas e o contrário também
let word = "Programar é muito bom"
console.log(word.toUpperCase)
console.log(word.toLowerCase)

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))

/* Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme
   o array em um texto e onde eram espaços coloque _
*/

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split("")
let phraseWithUnderscore = myArray.join(_)
console.log(phraseWithUnderscore)

