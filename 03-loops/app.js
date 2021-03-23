//Looping is a way to repeat functionality. (Instead of writing a command over and over.)

//THE FOR LOOP SYNTAX:
// for ([initialExpression]; [condition]; [incrememnt]) {
//     code to be executed until the condition is no longer met
// };

//A Real One
// for (let i = 1; i <= 16; i++) {
//     console.log(i + ' to the third power is ' + i ** 3)
// }

//Explain: Start with the number 1 and run the code.
//As long as i is less than or equal to 16, add one to the number and run the code again.
//Once i is greater than 16, stop.
//(P.S., the variable can be anything, as long as it's carried through the whole loop)

// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

//ROB! DON'T FORGET TO USE LET IN THE FOR LOOP!!!!

//LOOPING OVER ARRAYS (ACTUALLY USEFUL)
//Start at the zero index, then run the code for each element in the array until you're out of stuff.

// const albums = ['Emancipation', 'Memoirs', 'I Am Me', 'Caution'];

// for (let i = 0; i < albums.length; i++) {
//     console.log(albums[i] + ' is a good album');
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

//NESTED LOOPS!!!
//It's that thing of when you have a for loop in another for loop. For every iteration of the outer loop, the inner loop is going to have a FULL cycle. It's going to complete the ENTIRE INNER LOOP.
//This is useful when you need to iterate over nested arrays.

// const letters = ['a', 'b', 'c', 'd', 'e'];
// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
//     for (let j = 0; j < numbers.length; j++) {
//         console.log(numbers[j]);
//     }
// }

const seatingChart = [
    ['Rob', 'Mark', 'Devin'],
    ['Paul', 'Lauren', 'Michelle', 'David'],
    ['Taylor', 'Zach', 'Sydney']
]

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}