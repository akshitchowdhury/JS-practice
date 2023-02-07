var records = [{'name' : 'Jenny', 'marks' : 79},
{'name' : 'Lenny', 'marks' : 45},
{'name' : 'Kenny', 'marks' : 96},
{'name' : 'Penny', 'marks' : 65},
{'name' : 'Tempenny', 'marks' : 88}
]


var mapper = records.map(function(item){

    return item.marks
})

console.log(mapper)

// var automobiles = [{'name': "Masseratti", 'brand' : "Maseratti"},
// {'name': "Gallardo", 'brand' : "Lamborgini"},
// {'name': "Mustang", 'brand' : "Ford"},
// {'name': "Murcielago", 'brand' : "Lamborghini"},
// {'name': "GTx", 'brand' : "Nissan"}


// ]

// var filter_cars = automobiles.filter(function(item){
       
//        return item.name.charAt(0)== "M"


// })

// console.log(filter_cars)