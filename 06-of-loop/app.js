//For...of is newer in JS, and is therefore not supported in IE. Of course it's not.
//Good for iterable objects, like arrays, strings.

//Here's a regular for loop:
const singers = ["Mariah", "Celine", "Aretha", "Shania", "Gloria"];

for (let i = 0; i < singers.length; i++) {
    console.log(`${singers[i]} is a queen.`);
}

//But look at the for/of

for (let queen of singers) {
    console.log(`${queen} is a queen.`);
}

//I'm sure there's a much better example of for/of being a timesaver.
//How about some nested for loops, translated to for/of?

const divasLive = [
    ['Whitney', 'Mariah', 'Celine'],
    ['Christina', 'Mary', 'Shania'],
    ['Carole', 'Gloria', 'Madonna']
]

for (let row of divasLive) { //set variable to dig into main array
    for (let diva of row) { //set variable to dig into lesser arrays
        console.log(`${diva} will be performing tonight.`);
    }
}

for (let letter of "BANANAS") {
    console.log(`${letter}!!!!`)
}