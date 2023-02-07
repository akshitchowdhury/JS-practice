var time = function(input, unit){

    if(unit=="minute"){
        return input*60
    }

    if(unit== "seconds"){
        return input
    }

    if(unit=="hour"){
        return input*3600
    }
    
}


console.log(time(12,"hour"))