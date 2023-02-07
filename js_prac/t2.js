function woo(name1, name2, name3 = "Shura"){
    console.log(this)
    console.log(name1 + " "+name2+ name3)
}

//woo("Pratikshit",46)

var scroll = ["Apex", "Legends", 42]

woo.call('greet', "DEVA", "ashura")

woo.apply("tom", scroll)

woo("deva", scroll, 24)

