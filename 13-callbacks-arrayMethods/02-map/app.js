//map
//creates a new array with the results of calling a callback on every element in the array

// const years = ['prince', 'morris', 'apollonia', 'vanity', 'lisa', 'wendy']; //initial array on which to call function
// const caps = years.map(function (name) {
//     return name.toUpperCase();
// })

/*
The breakdown:
//declare a new array to be created
//call map method on the initial array
//declare an anonymous function with an argument to refer to each element in the initial array
//write what to do to each of those elements in order to create the new array
//return that new array
*/

const names = ['   timothee', '   darth_hater', 'robGraff  ', '  elton john'];

function cleanNames(arr) {
    const newNames = arr.map(function (name) {
        return name.trim();
    });
    return newNames;
}