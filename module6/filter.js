// you have to check for even numbers in an array and put them in a seprate array

let numbers = [1, 2, 4, 7, 8, 24, 43, 54, 57]

let evenArray = []

for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2==0){
        evenArray.push(numbers[i])
    }
}
console.log(evenArray)



//filter
// filter returns a new array it will return all those elements that matches the spacific condition
// if the condition is true it will return the element for that condition and if it is false it will discard that element

//* The filter() method creates a new array filled with elements that pass a test provided by a function.

//* The filter() method does not execute the function for empty elements.

//* The filter() method does not change the original array.

let num = [1, 2, 4, 7, 8, 24, 43, 54, 57]

let evenNum = num.filter(function(n){
    return n%2 == 0
})

console.log(evenNum)


// Que:- Check all the positve value in my transaction.


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let posValue = transactions.filter(function(n){
    return n > 0
})


console.log(posValue)

