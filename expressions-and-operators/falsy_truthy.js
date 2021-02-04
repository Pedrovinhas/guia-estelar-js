/* Falsy
false
0
-0
""
null
undefined
NaN
*/

console.log(0 ? 'verdadeiro' : 'falso' ) // falso

/* Truthy
true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/

console.log( {} ? 'verdadeiro' : 'falso' ) // verdadeiro