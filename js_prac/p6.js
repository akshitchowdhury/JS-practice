function funky(punk){

console.log("funky called")

punk()
var a = function alpha(){
    console.log("this is alpha")
}

a()

funky.foo = function(){
    console.log("funky.foo is called")
}
funky.foo()
}


function sigma(){

    console.log("sigma called")
}


funky(sigma)


