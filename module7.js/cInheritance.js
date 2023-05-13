// * CLASSICAL INHERITANCE
class Person {
   constructor(_name, _age){
    this.name = _name
    this.age = _age
   }

   welcome(){
    console.log(`Welcome ${this.name}`)
}
}

class Teacher extends Person {
    constructor(_name, _age, _classStrength){
        super(_name, _age)
        this.classStrength = _classStrength
    }

    test(){
        super.welcome()
    }
}

class Student extends Person{
    constructor(_name, _age, _cgpa){
        super(_name, _age)
        this._cgpa = _cgpa
    }
}

let Person1 = new Person('Satyam', 24)
let Teacher1 = new Teacher('Atif', 24, 80)
let Student1 = new Student('kaifee', 24, 7.44)
Teacher1.test()


console.log(Person1)
console.log(Teacher1)
console.log(Student1)
