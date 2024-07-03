// for of

// myArr = [1, 2, 3, 4, 5, 6]

// for(const val of myArr){
//     console.log(val);
// }


// const greetings = "Hello World"
// for(const greet of greetings){
//     console.log(greet);
// }


const map = new Map();

map.set("IN", "India")
map.set("CAD", "Canada")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map){
    console.log(key, ":-", value);
}