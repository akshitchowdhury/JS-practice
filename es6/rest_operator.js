//acts as an'etc' used in the grouping of items into array

var merger = function(...misc){

    console.log(misc)
    var temp = 0
   for(var i =0; i<misc.length;i++){

      console.log(misc[i]+temp)
        temp = misc[i]
        //console.log(temp)
      
   }
}

merger(12,32,11,45,65)