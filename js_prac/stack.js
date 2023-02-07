var arr = [12,65,35,890,"Chainsaw"]


function push(element){


    
    for(var i =0;i<arr.length;i++){

        var temp = null
        temp = arr[0]
         arr[0] = element
         arr[0+1] = temp
        

         console.log(arr[i])
         



    }
}

push(122)


// for(var i =0;i<arr.length;i++){

        
            
//              console.log(arr[i])
             
            
             
    
    
    
//         }