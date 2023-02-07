class proto{

//declaring a constructor via 'constructor method, to pass in data members
constructor(x1,y1){
this.x1 = x1
this.y1 = y1

}

//declaring a method iiside a class
method_Test(v1,v2){
  console.log("Working", " ",v1+v2) 
    
}

}

//creating object out of the class
const key = new proto(2,4)
console.log(key)

//calling/linking the method
key.method_Test(12,2)