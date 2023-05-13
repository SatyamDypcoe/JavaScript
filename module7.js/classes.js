class Person{
    constructor(_name, _age){
            this.name = _name
            this.age = _age
    }
    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

let Person1 = new Person('Atif', 25)
let Person2 = new Person('Satyam', 24)
let Person3 = new Person('kaifee', 25)


console.log(Person1)
console.log(Person2)
console.log(Person3)

Person2.welcome()