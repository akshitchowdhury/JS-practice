//object creation in JS

var heroes = { 'name' : 'Eren', 'Levi' : 'Mikasa', "platforms in anime" : ["9anime", 'crunchyroll']

}
console.log(heroes)
console.log(heroes["platforms in anime"][0])

//adding a new object in the alredy defined set. Allowed in JS
heroes.antagonist = "DevAshura"
//removing a property/object from the list
delete heroes["platforms in anime"]
console.log(heroes)