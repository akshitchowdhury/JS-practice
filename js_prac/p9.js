var package = {
    'name': "Pratikshit",
    'university' : "DUET",
    'email' : "akshitchowdhruy@gmail.com",
    'phone' : "863849**84",
    'execution': function exec(){

       return `${package.name}, ${package.university}, ${package.phone},${package.email}`

    }

}

function dummy(){
    var cred = "The Student credentials are as follows" 

    //return `${cred}, ${package.execution}`
   console.log(cred, package.execution())

}
dummy()