function demo(alias, lists){
    console.log(this)
    console.log( alias, lists)
    

}

demo("Akshit chow")

demo.call("basic","new argument : Ashura", "Deva")

var items = ["wings","flames","ice-boy"]

demo.apply("Hell-bringer", items)


