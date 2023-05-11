// Call Back Funtion
function FirstName(fstnme, clbfn){
    console.log(fstnme)
    clbfn('Singh')
}

FirstName('Satyam' , LastName) //Callback


function LastName(lstnm){
    console.log(lstnm)
}