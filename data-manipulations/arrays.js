// Criar Array com Constructor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contando elementos do array
console.log([ "a", "b", "c" ].length)

// Contando elementos de um array complexo
console.log([
    "a",
    {type: "array"},
    function(){
        return "Olá"
    }
])

// Transformar uma cadeia de caracteres (String) em elementos de um array
let word = "manipulação"
console.log(Array.from(word))


// Manipulando Arrays

let techs = ["html", "css", "js"]
// Adicionar um item no fim
console.log(techs.push("node-js"))

// adicionar no começo
console.log(techs.unshift("sql"))

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1,3))

// remover 1 ou mais items em qualquer posição do array
techs.splice(1,2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(index)