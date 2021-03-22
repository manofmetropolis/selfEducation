let number = 8
let boolean = true
let string = 'Mariah Carey is delightful'

// null is the absence of a value
// bigInt is created by sticking an n at the end of a number to woork with numbers larger than the maximum "safe" integer for the number type.
// undefined is the absence of a value, but it's different
// symbol is a unique identifier for more complex coding

// console.log(number + ' is a ' + typeof number);
// console.log('True and false have a type called ' + typeof boolean);
// console.log(string + ' is an example of a ' + typeof string);

//pop, push, shift, unshift
// const planets = ['The Moon', 'Venus', 'Earth', 'Mars'];
// console.log(planets);
// planets.shift();
// console.log(planets);
// planets.push('Jupiter', 'Saturn');
// console.log(planets);
// planets.unshift('Mercury');
// console.log(planets);
// planets.pop();
// console.log(planets);

//concat will combine two arrays and spit out a third array
// array3 = array1.concat(array2)

// const mariah90 = [1990, 1991, 1993, 1994, 1995, 1997, 1999];
// const mariah00 = [2001, 2002, 2005, 2008, 2009, 2010, 2014, 2018];

// const mariahCareer = mariah90.concat(mariah00);
// console.log(mariahCareer);

//includes() will check for an exact match within the array that is referenced, returns true or false
//indexOf() returns array of exact match item; if not in the array, it will return -1.
//reverse() reverses the array — IT IS A DESTRUCTIVE METHOD, meaning it changes the array for good.

// const firstThree = ['Mariah Carey', 'Emotions', 'Music Box'];
// console.log(firstThree.indexOf('Music Box'));
// console.log(firstThree.includes('Butterfly'));
// firstThree.reverse();

// console.log(firstThree);

//SLICE, SPLICE, SORT
// slice extracts and returns a segment of an array; array.slice(?index, ?end); So it goes from the given index to the index of the 'end' given, but is NOT INCLUSIVE OF THE STOP. If no end is given, it goes to the end of the array. This method is not destructive.
const ninetiesTitles = ['Mariah Carey', 'Emotions', 'Music Box', 'Daydream', 'Butterfly', 'Rainbow'];
ninetiesTitles.slice(1, 4);

//SPLICE removes or replaces existing elements. THIS IS A DESTRUCTIVE METHOD.
//array.splice(starting index, ?how many items to delete, ?what to put in)
//If only one number is given, that's what's getting deleted, and nothing else happens.
const laterTitles = ['Glitter', 'Charmbracelet', 'Emancipation', 'Memoirs', 'I Am Me', 'Caution'];
laterTitles.splice(1, 2, 'Infinity'); // delete charmbracelet and emancipation, and insert 'Infinity' where those were.

//