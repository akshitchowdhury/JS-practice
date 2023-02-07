//showcasing global scope of var//

var global = "omni-potent";

function inner(){
    console.log(global)
}

inner();
//the var global can be used inside a newly created function//
//*note how to declare a function//

//showcasing local scope of var//
function inwards(){
    var local = "local-king"
    focal = 69;

    console.log(local)
    
}

inwards()
//*note that the var local cannot be used OUTSIDE function inwards. * only within function inwards or any function within it//

console.log(focal)
//declaring variable focal without the prefix var declares it globally. it can be used outside/inside any function//

