//the values given in the func args are the default values and get displayed when nothing is given
function func(name = "Chloe", power = "none"){

    
    return `${name} ${power}`
}

console.log(func("Ashura", 9000))


console.log(func()) //default values wi be displayed