let Person1 = {
    firstName : 'Satyam',
    lastName : 'Singh',
    age : 24

    // printDetails : function(){
    //     console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    // }

}
let printDetails = function(){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
}

let printDetails1 = function(city, power){
    console.log(`Hi I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city} and I have the ${power}`)
}

let Person2 = {
    firstName : 'Atif',
    lastName : 'Hu',
    age : 25,
}

// CALL

printDetails1.call(Person2, 'Gaya', 'Thor hammer')

// Apply
printDetails1.apply(Person1, ['Pune', 'Iron man Suit'])

// Bind Method

let myFun = printDetails1.call(Person2, 'Gaya', 'Thor hammer')
console.log(myFun)