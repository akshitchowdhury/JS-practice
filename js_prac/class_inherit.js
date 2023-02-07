class Main{
    constructor (naem,gear){
        this.naem = naem
        this.gear = gear
    }
  driver(value){

    value = ("the value of" + value)

    return value+"is"+" "+this.naem

  }

}
//inherits the 'Main' class via extends keyword
class Subhero extends Main{

    fire(num1,num2){

        return num1*num2
    }
}

const flames = new Subhero("Chev", "Suspension")

console.log(flames.fire(2,3))

