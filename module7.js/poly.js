class Animal {

    sound(){
        console.log('animal makes diffrent sounds')
    }
}

class Dog {
    sound(){
        console.log('Dog Barks')
    }

}

class Cat{

    sound(){
        console.log('Cat Mews')
    }
}

let Animal1 = new Animal()

let Tommy = new Dog()

let Percy = new Cat()

Animal1.sound()
Tommy.sound()
Percy.sound()