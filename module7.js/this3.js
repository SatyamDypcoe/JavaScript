// * BROWSER WITHOUT STRICT METHOD:-


// console.log(this)  //window object



// function displayThis(){
//             console.log(this)
//         }
        
//         displayThis()      // Window Object



let myObj1 = {
    name: 'Satyam',
    age: 24,

    myFn1: function(){
        console.log(this)
    }
}

myObj1.myFn1()              // Object itself




let myObj2 = {
    name: 'Satyam',
    age: 24,

    myFn2: function(){
        function myFn3(){
            console.log(this)
        }
        myFn3()
    }
}

myObj2.myFn2()        // Window Object