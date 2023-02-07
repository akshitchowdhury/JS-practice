//json files are always in strings with backticks(``).

const value = `
[
    {
        "name" : "Sauron",
        "occupation" : "Monarch",
        "Age" : 1000 
    },
    {
    
    "name" : "Talion",
    "occupation" : "Ranger",
    "Age" : 40
    
    }
    
    
    ]

 `
   
    
     
//realvalue var created to capture the parsed json file into js file array

    var realvaue = JSON.parse(value) //JSON.parse is a method to parse in json(string file) to js for manipulation 
     
    //after manipulation new value can be added
    var addvalue = [{
        "name" : "Celebrimbor",
        "Occupation" : "Elf Lord",
        "Age" : 700
   }]

   //push operation is used to insert the addvalue to the array realvalue
    realvaue.push(addvalue)
    
    //output/displaying the file
    console.log(realvaue)

//converting js back to JSON format
  var json_format= JSON.stringify(realvaue)

  console.log(json_format)