// For
for (let i = 10; i > 0; i--) {
    if(i===5) {
        continue;
    }

    console.log(i)
}

// While
let i = 49093049;
while (i>10) {
    console.log(i)

    i /= 35
}

// For of
let name = 'Mayk'
let names = ['Peu', 'Flávia', 'Kaka']

for(let char of names) {
    console.log(char)
}

// For in
let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}