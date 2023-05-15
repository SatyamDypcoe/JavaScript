function Person(_name, _age){
    this.name = _name
    this.age = _age

    // this.getNameandAge = function(){
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}

 Person.prototype.getNameandAge = function(){
        console.log(`I am ${this.name} and my age is ${this.age}`)
    }

let Person1 = new Person('Satyam', 24)

let Person2 = new Person('Atif', 25)

console.log(Person1.getNameandAge())
console.log(Person2)