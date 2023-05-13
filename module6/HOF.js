 // without using higher order function

//  let arr = [1, 2, 3, 4]

//  let squaredAdd = []

//  for( let i=0; i< arr.length; i++){
//     squaredAdd.push(arr[i]*arr[i])
//  }

//  console.log(squaredAdd)





 // Using Higher Order Function

 // Using map
 // Map will always return a new array with result
 // Map will loop through every element of array and will perform specific operations that have provided

 const num = [5, 6, 7, 8, 9]

 const squaredNum = num.map(function(n){ return n*n})

 console.log(squaredNum)