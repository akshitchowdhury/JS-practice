var arr = [11,43,21,54,670]



var transform = arr.map(function(item){

    return item+1
})

console.log(transform)

var fiter = arr.filter(function(i){

    return i%2==0
})

console.log(fiter)