function fool(message, name){

   
    console.log(this) //the keyword 'this' refers to function call context
    console.log(message, name)
}
fool();


//call, apply, bind methods of function



fool.call('asura', 'Deva', 'DevAshura') //call method can chnge default context of function. '
//here 1st argument i.e. 'asura' string is used as input to change context. 2nd and 3rd args are used as func arg as 'message' and 'name'
//respectively  


var args = ['Valorant', 'Apex Legends']

fool.apply('asura', args) //apply method can be used while implementing an array in arguments as the one used 'args'

//bind function used to permanently change function argument

var shite = fool.bind(null, 'hola') //null means the original context remains the same.

//store it in a variable and run
                                    //'hola' is the 1st argument of the fool function 'message'
shite('amigos')                     //'amigos' is the 2nd argument of function fool 'name' 