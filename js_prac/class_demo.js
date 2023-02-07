class test{
    constructor(name,age){

        this.name = name
        this.age = age
    }

    car(qyear){

        return qyear-this.age
    }
}

const wheel = new test("Ford",2012)

console.log("The current age of car is", " ",wheel.car(2023))
