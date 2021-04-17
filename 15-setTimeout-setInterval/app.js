//setTimeout and setInterval
//These functions are for delaying the execution of a function.

//setTimeout//
//Requires a callback function and a number of millisecs to delay.

// setTimeout(() => {
//     console.log('Sup?');
// }, 3000)

//setInterval
//Calls a callback every X number of milliseconds. This is uused to repeat something.

// console.log(Math.random());

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)

//The filter method (I don't feel like making a new page)
//Filter creates a new array with all elements that pass a test implemented by the provided function.

const medals = [
    {
        name: 'United States',
        numMedals: 174,
        continent: 'North America'
    },
    {
        name: 'Romania',
        numMedals: 53,
        continent: 'Europe'
    },
    {
        name: 'West Germany',
        numMedals: 59,
        continent: 'Europe'
    },
    {
        name: 'China',
        numMedals: 32,
        continent: 'Asia'
    },
    {
        name: 'Italy',
        numMedals: 32,
        continent: 'Europe'
    },
];

// const europe = medals.filter(nation => nation.continent === 'Europe')

// const europe = medals.filter(nation => nation.continent === 'Europe').map(nation => nation.name)

function validUsernames(array) {
    return array.filter(name => name.length > 10);
}

let myArr = ['RobertGraff', 'superman1983', 'kalel18', 'devinG1']