

// var obj = {
//     'name' : "Raiden",
//     "Occupation" : "Enhanced assassin",
//     'func' : function(){
//         console.log(obj.name)
//         console.log(obj.Occupation)
//     }
// }


// console.log(obj.func())

var arr = ['Fierro', 'Phoenix', 905, 786]

var capture =function popper(){
    return arr.pop()
}



console.log(arr)



console.log("captured pop element",capture())

function pusher(){
    var insert= arr.push(capture())
    return insert
}



console.log(pusher(capture()))

console.log(arr)