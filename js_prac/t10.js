const person = {

    first: 'Virat',

    last: 'Kohli',

    twitter: '@vkohli',

    company: 'Cricketer'

}



function displayName(n1,n2){

    const {first : name1, last: name2} = person


    n1 = name1
    n2= name2
    console.log(`${n1} ${n2}`)

}

displayName("a","b")