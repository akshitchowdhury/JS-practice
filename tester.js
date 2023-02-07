const alien = `[
{
   "name" : "JSON",
   "type" : "Exchange format",
   "similar types" : ["XML", "YML", "CSV"],
   "rating" : 10

}


]`

var noob = JSON.parse(alien);

console.log(noob);