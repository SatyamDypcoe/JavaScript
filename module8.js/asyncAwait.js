function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order for coffee recieved')
        }
        else{
            reject('Other order rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`${order} and is served`)
    })
}

async function serveOrder(){
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced)
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
}

serveOrder()