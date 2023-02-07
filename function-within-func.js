function foo(callback)  {

    console.log("foo is here")
    
    callback();


}


function shoot(){

    console.log("shoot called")
}

foo(shoot);