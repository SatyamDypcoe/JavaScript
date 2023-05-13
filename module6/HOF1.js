// Convert into Rupee to Dollar. All deposited numbers are in positive and withdrawl numbers are in negative.
// Solve usin Higher Order Function.

const transactions = [1000, 3000, 4000, 2000, -898, -4500]

const intrToDollar = 80

const convertedInDollar = transactions.map(function(n){ return n/intrToDollar})

 console.log(convertedInDollar)


 // by forEach method 

 const convertedInDollar1 = transactions.forEach(function(n){ 
    console.log(n/intrToDollar)
 })

 console.log(convertedInDollar1)

 // Map vs forEach :-
 // Map will always return a new array with result but forEach always return result in value not in array.
 // In map method we will use return key but in forEach method we have to declare console key within scope with operations.