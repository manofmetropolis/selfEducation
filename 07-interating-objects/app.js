const testScores = {
    devin: 100,
    louis: 98,
    harry: 74,
    rob: 86,
    niall: 91,
    carly: 77,
    freddie: 65,
    sam: 95,
    mark: 81,
    kate: 68
}

// for (let person in testScores) {
//     console.log(`${person} got theyself a ${testScores[person]}.`)
// }

let total = 0;
let scores = Object.values(testScores)
let average
for (let score of scores) {
    total += score;
    average = total / scores.length;
}

console.log(average);