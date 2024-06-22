const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(23, 43, 55, 5);

// console.log(myArr[1]);


// +++++++++++++++++++++++++ Methods +++++++++++++++++++++++++

// myArr.push(6); //add elements
// myArr.pop() //will remove the last element
// myArr.unshift(9); //add value in the beginning
// myArr.shift() // pop the first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); //bind it but make it string 

// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);

const newArr1 = myArr.slice(1, 3) //3 is not included

console.log(newArr1);
console.log("B ",myArr);

const newArr2 = myArr.splice(1, 3) //3 included

console.log(newArr2);
console.log("C ",myArr);
