
function alias(name=""){
if(
name.charAt(0) == "P" | name.charAt(1) == "y"){

    return name
}   

else{
    return "Py"+name
}

}


console.log(alias("yycharm"))