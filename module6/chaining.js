let arr =[
        {name: "A", age: 14, gender: "M"},
        {name: "B", age: 34, gender: "M"},
        {name: "C", age: 24, gender: "F"},
        {name: "D", age: 44, gender: "F"},
        {name: "E", age: 44, gender: "M"},
        {name: "F", age: 28, gender: "F"},
        {name: "G", age: 36, gender: "M"},
        {name: "H", age: 47, gender: "F"},


]

// Age of all the men(Males)

// let males = arr.filter(function(obj){
//     return obj.gender == 'M'
// })

// let agesOfMales = males.map(function(male){
//     return male.age
// })

// console.log(males)
// console.log(agesOfMales)


// chaining
// rather than we can do :-

let malesAges = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
})

console.log(malesAges)

// Que:- filter out positive element from transaction and calculate the sum of element
// use filter and reduce to achieve this

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let posValSum = transactions.filter(function(n){
    return n > 0
}).reduce(function(accumulator, n){
    let updateSum = accumulator + n
    return updateSum
} , 0 )

console.log(posValSum)