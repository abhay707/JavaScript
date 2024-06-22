let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let CreatedDate = new Date(2023, 0, 23);
let CreatedDate2 = new Date("01-23-2023");

// console.log(CreatedDate.toLocaleString());
// console.log(CreatedDate2.toLocaleString());

let myTimeStamp = Date.now(); // return date in millisons

// console.log(myTimeStamp);
// console.log(CreatedDate2.getTime());

// console.log(Math.floor(Date.now()/1000)); //convert it in seconds

// date = myDate.getDate()
// console.log(myDate.getMonth()+1);
// console.log(myDate.getFullYear());

// console.log(`Today is ${date}`);

const dateFormate = myDate.toLocaleString('default',{
    weekday: "long",
    day:"2-digit"
})

console.log(dateFormate);