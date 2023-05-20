// Shallow copy prob.

let firstPerson ={
    name: 'Satyam',
    age : 24,

    address: {
        city: 'Lucknow',
        state: 'UP'
    }

    
}

let secondPerson = {...firstPerson}
secondPerson.name = 'Atif'
secondPerson.address.city = 'Delhi'
 
console.log(firstPerson)
console.log(secondPerson)