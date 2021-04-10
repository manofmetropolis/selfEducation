//Level your functions up.

//SCOPE is the location where a variable is defined, and that dictates where we have access to that variable. It's also a major source for errors.

//THIS WORKS:
// function totalAlbums() {
//     let albums = 39;
//     console.log(albums);
// }

//THIS DOESN'T:
// function princeRecords() {
//     let records = 39;
// }
// console.log(records);

//Variables that are defined in the function are only accessible within the function.

//BLOCK SCOPE
let radius = 8;
if (radius > 0) {
    const PI = 4.14159;
    let msg = 'Hellurr.';
}

console.log(radius);
//This worked.

// console.log(msg);
//This didn't.
//VSCode is cool because it will immediately alert you too an unreachable variable.

//LEXCIAL SCOPE
//If there is an outer function, and an inner function in that function...the inner function has access to the variables defined in the outer function.

function picnic() {
    const people = ['Mark', 'Jack', 'Mike', 'Cooper'];
    const needs = ['plates', 'forks', 'burgers', 'potato salad'];

    function bring() {
        let person = people[Math.floor(Math.random() * people.length)];
        let need = needs[Math.floor(Math.random() * needs.length)];
        console.log(`I need ${person} to bring ${need}.`);
    }
    bring();
}