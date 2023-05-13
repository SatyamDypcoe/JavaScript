// * some method
// some: condition check: To get true or false based on a condition.
// it will return true if even 1 element satisfy the condition.

const transactions = [-1000, -3000, -4000, 2000, -898, -3800, -4500]

let resultSome = transactions.some(function(n){
    return n >0
})

console.log(resultSome)



// * every
// it will return true if every element satisfy the condition.


let resultEvery = transactions.every(function(n){
    return n >0
})

console.log(resultEvery)