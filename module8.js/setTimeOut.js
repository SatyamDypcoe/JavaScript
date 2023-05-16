// setTimeOut(cb, 2000)
console.log('Before')


function greet(){
    console.log('Hello from the setTimeOut')
}

setTimeout(greet, 4000)

console.log('After')