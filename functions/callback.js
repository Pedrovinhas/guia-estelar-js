// callback function

/* function sayMyName (name) {
    console.log(name)
}
*/

function sayMyName (name) {
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a função callback')
}

sayMyName (
    () => {
        console.log('estou em uma callback')
    }
)