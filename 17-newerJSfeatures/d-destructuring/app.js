//Destructuring

//Unpacking or extracting values from arrays, properties from objects into distinct variables.

const scores = [23098, 49458, 59697, 69796, 89706];

const [first, second, ...theRest] = scores;

//Destructuring from objects

const musician = {
    firstName: 'Prince',
    middleName: 'Rogers',
    lastName: 'Nelson',
    born: 1958,
    died: 2016,
    hometown: 'Minneapolis',
    state: 'Minnesota',
    bio: 'Prince is the single greatest musical artist that ever lived.'
}

const { firstName, middleName, lastName, hometown, bio } = musician;