//Some and Every

// EVERY //

//Returns true if all elements in the array pass a test function.

// SOME //

//Similar to every, some returns true if any of the array elements passes a test function

const singers = ["Michael Jackson", "Madonna", "Prince", "Paula Abdul", "Janet Jackson", "George Michael", "Whitney Houston"];

singers.some(singer => {
    return singer.length < 10;
})
//true

singers.every(singer => {
    return singer.length < 10;
});
//false

singers.filter(singer => {
    return singer.length < 10;
})

// REDUCE //
//Executes a reducer function on each element of an array, resulting in a single value.

/*
The parts of the reduce function:
arr.reduce((accumulator, currentValue) => {
    return accumulator + cuurentValue; (This can be whatever you want it to be...)
});

Accumulator holds the running result of the function.
The accumulator changes for each run through of the function.

Current value is whatever the next one in the array is
*/

const weights = [100, 115, 235, 91, 85, 100];

weights.reduce((acc, currentValue) => {
    return acc + currentValue;
});

//Find the minimum//
const minWeight = weights.reduce((min, currWeight) => {
    if (currWeight < min) {
        min = currWeight;
    }
    return min;
});

//Reduce with objects//

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

const bigWinner = medals.reduce((mostMedals, currentMedals) => {
    if (currentMedals.numMedals > mostMedals.numMedals) {
        return currentMedals;
    }
    return mostMedals;
});

// THIS in arrow functions //
const theGreatest = {
    firstName: 'Prince',
    lastName: 'Nelson',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

//The arrow function refers to the window scope and fucks everything up.