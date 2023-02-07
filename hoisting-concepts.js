//variable hoisting
console.log(x)//does not show error because var x is read even though declared later 
//result shows undefined because only var x is being read having no value athe beginning
var x = 1;
console.log(x)// result shows 1 because after reading var x as declared it moves to next line where it gets the assigned value


//function hoisting
jam();  //similar to variaible hoisiting it reads the function assigned first

function jam(){
    console.log("hello")
}

yam(); //will throw error because is not defined as a function only read as var declared. 
var yam = function(){
    console.log("mellow")
}
