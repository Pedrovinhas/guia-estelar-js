// Array

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// Acessando valores dentro do Array
console.log(animals)

// Acessando o valor escolhido dentro do Array
console.log(animals[0])

// Total de elementos no Array
console.log(animals.length)

// Objetos dentro de Arrays

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// Mostrando o Objetos dentro do Array
console.log(animals[2])

// Acessando uma propriedade do Objeto dentro do Array
console.log(animals[2].name)

// Tentando acessar uma propriedade undefined do Array 
console.log(animals[1].name)