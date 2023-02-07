var checker = function(n1,n2){


    if(n1 ==50|n2==50){

        return true
    }

    else if(n1+n2==50){

    return true
    }

    else{
        return false
    }


}


console.log(checker(25,25))

console.log(checker(50,12))

console.log(checker(1,76))
