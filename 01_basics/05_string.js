const name = "Abhay"
const age = 19

// console.log(name + age);

// console.log(`Hello my name ${name} and my age is ${age}`);

const gameName = new String('Abhay')

console.log(gameName[0]); 
console.log(gameName.__proto__);  

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(3)); 
// console.log(gameName.indexOf("a")); 

const subString  = gameName.substring(0,3);
// console.log(subString);

const sliced = gameName.slice(0,4);
// console.log(sliced);


const newString = "    Abhay    ";
// console.log(newString);
// console.log(newString.trim()); //will remove spaces

const url = "https://abhay.com/abhay%20chaturvedi"
// console.log(url.replace('%20','-'));
console.log(url.includes('abhay')); //tell that it includes or not

// console.log(gameName.split(""));