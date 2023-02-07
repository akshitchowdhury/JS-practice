const person = {

    first: 'Virat',

    last: 'Kohli',

    twitter: '@vkohli',

    company: 'Cricketer'

}

function displayName({first,last}){
    console.log(`${first}, ${last}`)
}

displayName(person)