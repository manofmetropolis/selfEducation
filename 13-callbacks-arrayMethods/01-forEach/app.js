//forEach

//Accepts a callback function; calls the element once per item in the array.
//Largely overtaken by our friend the for loop.

const numbers = [1, 2, 3, 4, 5];

function printElement(element) {
    console.log(element);
}

printElement(numbers);

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

const movies = [
    {
        title: 'A League of Their Own',
        lead: 'Geena Davis'
    },
    {
        title: 'Rear Window',
        lead: 'Jimmy Stewart'
    },
    {
        title: 'Sister Act',
        lead: 'Whoopi Goldberg'
    },
    {
        title: 'Nothing to Lose',
        lead: 'Martin Lawrence'
    },
    {
        title: 'Under the Cherry Moon',
        lead: 'Prince'
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} starring ${movie.lead}.`)
})