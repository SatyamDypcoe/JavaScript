// Spread operator{...}

let firstPerson ={
    name: 'Satyam',
    age : 24
}

let secondPerson = {...firstPerson}
secondPerson.name = 'Atif'
 
console.log(firstPerson)
console.log(secondPerson)