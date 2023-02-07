//declaring an array in JS

var arr = ['Monday', 24, 'Armin', true]

//Printing the array list
console.log(arr)

//Syntax for length of array
console.log(arr.length)


//Syntax for specific element inside the array
console.log(arr[2])


//Changing an element in array
arr[0] = 'Sunday'

console.log(arr)

//Inputing a new element in array beyond its limit. In JS it is allowed
arr[4] = 'demonic'
arr[5] = 'god-level'
arr[6] = 69
arr.sort()
console.log(arr)

//------------------------------------------------//
//BAsic array methods

var numarr = ['Pineapple', 'Cucumber', 'Apple', 'Merecedes']
//Syntax to sort an array
numarr.sort()
console.log(numarr)
//To find an index of an element
console.log(numarr.indexOf('Apple'))

//To reverse sorting an array
numarr.reverse()
console.log(numarr)

//Sorting numbers in array inJS

var digiarr = [2, 566, 89, 60, 34, 03]

//Sorting order oes in reference to alphabets i.e. String wise
digiarr.sort()
console.log(digiarr)

//To get desired sorting order input the following algo inside the IIFE within the sort functions

digiarr.sort(function(x,y){
    return x-y
 }) 

console.log(digiarr)

//inserts new element at end of an array. can accept multiple elements to be added together
digiarr.push(911)

console.log(digiarr)

//removes element from end of an array
digiarr.pop()
console.log(digiarr)

//to remove element from beginning
digiarr.shift()
digiarr.unshift(01)
console.log(digiarr)

//Splice method : to remove and insert elements at the same time. 
//digiarr.splice(starting index, no of items to be removed)
digiarr.splice(0,2)
console.log(digiarr)

//digiarr.splice(0,2, 'Moday', 'Tuesday') added two new elements after removing 
digiarr.splice(0,2, 'Moday', 'Tuesday')
console.log(digiarr)

//Slice method : to create a acopy of the array.
// Store it in a variable and execute it to get the result
var slicemode= digiarr.slice(0,3)
console.log(slicemode)

//forEach method : easier alternative of for loop used to deal with each and every item of an array

var names = [  {alias : 'Akshit'},
                {nickname : "Pom Pom"},
                {"game_alias " : "DevAshura"}

]

names.forEach(function(item){
    
    console.log(item)


})

//map method to transform the elements of an array

var origin = [1,2,3,4,5,6]

var square = origin.map(function(item){

    return item*item
})

console.log(square)
