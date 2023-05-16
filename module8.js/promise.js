// HOW TO PRODUCE YOUR PROMISE
let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 4

    setTimeout(()=>{
        if(a===b){
            resolve('the values are equal')}

        else{
            reject('the values are not equal')
        }
    }, 2000)
})
// // pending state
// console.log(myPromise)

// FULLFILLED - then METHOD

// consuming your promises

myPromise.then(function(result){
    console.log(result)
}) // fulfilled State

myPromise.catch(function(failedResult){
    console.log(failedResult)
}) // rejected state

