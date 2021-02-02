/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + "está andando"
    }
}

let name = new String("Pedro")
let name = new String("Flávia")
