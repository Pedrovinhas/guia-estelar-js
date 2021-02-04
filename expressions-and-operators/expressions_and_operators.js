/* Expressões e Operadores

 - Expressions
 - Operators
    Binary
    Unary
    Ternary
*/

// Expression
let number = 1

// Binary
console.log (number + 3)

// Unary
console.log (++number)
console.log (--number)

// Ternary
console.log(false ? 'alo' : 'nada')

// New
let names = new String ('Mayk')
names.surName = 'Briot'
let age = new Number(23)
console.log(names,age)

// New com Date
let date = new Data('2020-12-01')
console.log(date)
console.log(data.__proto__)

// typeof delete
console.log(typeof "Mayk")

const person = {
    name: "Mayk",
    age: 25,
}
delete person.age
console.log(person)

