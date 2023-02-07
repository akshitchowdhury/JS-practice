var coded = `[{"1. name" : "JSON"},
{"2. type" : "Exchange format"},
{"3. similar Types" : ["XML","YML","CSV"]},
{"4. rating" : "10"}
]`


var decoder = JSON.parse(coded)

console.log(decoder)