//Spread - The spread syntax can expand an iterable ... into a list of arguments.

console.log('Hellurr');
console.log(...'Hellurr');

//Spread for array literals

const singers = ['Prince', 'Mariah', 'Joni'];
const dogs = ['Huck', 'Buddy', 'Banger'];

const allList = [...singers, ...dogs]
//This combines all of the contents of the lists into a single array.

//spread on object literals

const prince = { age: 57, genre: 'funk' };
const madonna = { albums: 14, genre: 'pop' };

