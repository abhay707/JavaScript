// var c = 300;
// let a = 300

// if(true){
//     let a = 10
//     const b = 30
//     var c = 30
// }

// console.log(a); //Error
// console.log(b); //Error
// console.log(c);

// function one(){
//     const username = "Abhay"

//     function two(){
//         const website = "YouTube";
//         console.log(username);
//     }

//     // console.log(website); //Error
//     two();
// }

// one()

// if(true){
//     const username = "Abhay "

//     if(username == "Abhay "){
//         const website = "Youtube";
//         console.log(username + website);
//     }
//     // console.log(website) //Error
// }

// console.log(username); //Error



//Both of them is the way of defining fun but in first case we can call the function before its declaration and in second we can't 
addone(5)
function addone(value){
    return num + 1
}

addtwo(5)
const addtwo = function(num){
    return num + 2;
}