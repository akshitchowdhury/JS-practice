function dummy(t1,t2){

console.log(t1,t2)
console.log(this)

}



dummy.call("hitman","hello", "agent47")

var store = ["solid snake", "Sam fisher"]

dummy.apply("shite", store)


var wings = dummy.bind("valorant")

wings(store, 47)