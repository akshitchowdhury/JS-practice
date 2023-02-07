//Function declaration and its syntax

function declaration(x, y){

    //declaring variable and input of constructors x and y
    var result= x+y

    //return back the result in calculation
    return result;
}

//passing values to the constructs and enclosing it inside another variable var final
var final =declaration(22, 33);

//display the final result
console.log(final);
console.log("hello")


//----------------------------------------------------------------------//

//Function Expression and its concept. (more like avariable declaration)

//declaring a var exp and enclosing the entire function expression inside it
var exp = function (x,y){

    var results = x+y;
    return results;

}

//Since function has no name so var exp takes the name, therefore exp can be used as function with the constructs
console.log(exp(20,10))

