function triangle(s1, s2, s3){

var perimeter = s1+s2+s3

var area = 1/2*(s1+s3)

return `The perimeter is ${perimeter} and the area is ${area}`

}


var display = function(triangle){

    console.log(triangle)


}



display(triangle(12,14,9))