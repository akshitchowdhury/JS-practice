
//creating a function expression and passing the arguments. Note that logResult itself is a function that can be passed as args in another function in JS
const sum = function (x,y,logResult){

    var values = x+y
   //passing var values as parameter in logResult func and calling it within the function expression which auto invokes contents from LINE 13
   
    logResult(values)
}

//creating the function logResult

function logResult(values){

    console.log(values)
}

//invoking line 19 starts the flow from line 3
sum(20,10, logResult)

//---------------------------------------------------------//

//code implementation of IIFE. its use is to wrap around a piece of code and to restrict formation of global variables
 (function(){
const add = function(x,y, cb){

    var exec = x+y;
    cb(exec)
}



add(20,30, function cb (exec){

    console.log(exec)
})
}())

