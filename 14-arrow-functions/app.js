//ARROW FUNCTIONS!
//A newer syntax for functions. No IE support. No IE surprise.
//It's more "compact."

const add = (x, y) => {
    return x + y;
}

// const rollDie = (sides) => {
//     return Math.floor(Math.random() * sides) + 1;
// }

//Arrow functions and implicit returns
//Implicit returns only work with arrow functions

// const rollDie = (sides) => (
//     Math.floor(Math.random() * sides) + 1 //No semicolon; use parens instead of brackets for implicit return
// )

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1 //No semicolon; use parens instead of brackets for implicit return
//It's worth weighing whether it should be on one line based on length.
//Implicit returns only work when one expression exists.

//Arrow functions with methods and such

//  MAP  //

const medals = [
    {
        name: 'United States',
        numMedals: 174
    },
    {
        name: 'Romania',
        numMedals: 53
    },
    {
        name: 'West Germany',
        numMedals: 59
    },
    {
        name: 'China',
        numMedals: 32
    },
    {
        name: 'Italy',
        numMedals: 32
    },
];

// const medalOutput = goldMedals.map(function (nation) {
//     return `${nation.name} won ${nation.numMedals} medals in 1984.`
// })

const medalOutput = medals.map(nation => (
    `${nation.name} won ${nation.numMedals} medals in 1984.`
))

/*
const VARIABLE NAME = ARRAY.map(PARAMETER => (
  STATEMENT
))
*/

const characterConditions = [
    {
        name: 'Winnie the Pooh',
        condition: 'obesity'
    },
    {
        name: 'Eeyore',
        condition: 'depression'
    },
    {
        name: 'Owl',
        condition: 'narcissism'
    },
    {
        name: 'Tigger',
        condition: 'hyperactivity'
    },
    {
        name: 'Rabbit',
        condition: 'anxiety'
    },
    {
        name: 'Piglet',
        condition: 'speech impediment'
    }
]

const thousandAcreMedical = characterConditions.map(character => (
    `${character.name} exhibits textbook signs of ${character.condition}.`
));