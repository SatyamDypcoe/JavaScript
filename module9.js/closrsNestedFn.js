function greet(){
    let name = 'satyam'

    function displayName(){
        console.log('hi ' + name)

        let age = 25

        function displayAge(){
            console.log('My age is '+age)
        }

        return displayAge

    }
    return displayName
}

let g1 = greet()

// g1()  //displayName

let g2 = g1()

console.log(g2)

g2()  // displayAge