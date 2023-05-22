function greet(){
    let name = 'satyam'

    function displayName(){
        console.log('hi ' + name)

    }
    return displayName
}

let g1 = greet()
g1()