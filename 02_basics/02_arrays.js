const marvel = ["thor", "Iron Man", "spiderman"]
const dc = ["batman", "superman", "flash"]

// marvel.push(dc); //will take array as single object
// const superheros = marvel.concat(dc); //merge the array and return new array

// const superheros = [...marvel, ...dc] //spread is used to concat which will work the same and can used on more than 2 arrays
// console.log(superheros);

const nest = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const sperated = nest.flat(Infinity) //we'll get spreaded values

// console.log(Array.isArray("abhay")); //false
// console.log(Array.from("abhay")); //will make it array
// console.log(Array.from({name: "Abhay"})); //will return empty array cause we have to specify to convert key or value

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); //make array of multiple objects

