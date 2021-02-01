// 1. Declare uma variável de nome weight
let weigth

// 2. Que tipo de dado é a variável acima
console.log(typeof weigth)
/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * starts: Number (float)
        * isSubscribed: Boolean (boolean)
*/

let name = "Pedro"
let age = 22
let starts = 23.4
let isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
    
*/

let student = {
    name: 'Pedro',
    age: 22,
    starts: 34.1,
    isSubscribed: true
}

console.log(`${name} de idade ${age} pesa ${age}`)


/*
    5. Declare uma variável do tipo Array, de nome students
    e atribua a ela nenhum valor, ou seja, somenta o Array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela
    o objeto students da questão 4. (Não copiar e colar o objeto, mas
    usar o objeto criado e inserir ele no Array)
*/

students = [
    students
]

/*
    7. Coloque no console o valor da posição zero do Array acima
    7.1 Coloque no console o valor da primeira propriedade da posição zero do Array acima
*/

console.log(students[0])
console.log(students[0].name)


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const pedro = {
    name: "Pedro",
    age: 22,
    weight: 86.2,
}

students = [
    student,
    pedro
]

console.log(students)

// Podemos também fazer dessa forma

students[1] = pedro
console.log(students)

/* 9. Sem rodar o código responda qual é o resultado do codigo
    abaixo e porquê. Após sua resposta, rode o código e veja se
    você acertou.

    console.log(a)
    var a =1

*/

// Undefined, pois a variável var foi declarada depois do console.

/* 10. Trocando o var pelo let, qual é a alteração ?

    - Vai ter um erro de referência, pois a variável ainda não foi criada
*/