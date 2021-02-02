// function hoisting

sayMyName ()

function sayMyName () {
    console.log ('Pedro')
}

// Function expression

sayMyName () 

const sayMyName = function () {
    console.log('Pedro')
}

// Função nomeada de expressão

sayMyName () 

var sayMyName = function sayMyName() {
    console.log('Pedro')
}