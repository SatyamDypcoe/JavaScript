// you need the sum of every element in an array

let arr = [1, 2, 3, 4, 10]

let sum = 0  // accumulator 

for(i = 0; i< arr.length; i++){
    sum = sum + arr[i]
}

console.log(sum)



// reduce 

let num = [1, 2, 3, 4, 10]

let result = num.reduce(function(accumulator, value){
    let updateSum = accumulator + value
    return updateSum
} , 0 )

console.log(result)