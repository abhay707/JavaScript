// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhay",
    class: 11,
    [mySym]: "mykey1", //this is how to define symbol
    "Full Name":"Abhay Chaturvedi",
    email: "abhx123@gmail.com",
    isLoggedIn: false,
    loginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]); //cannot access by .
// console.log(JsUser[mySym]); //to access symbol

JsUser.email = "abhay@google.com"; //can change the value
// Object.freeze(JsUser) //no change will occure now
JsUser.email = "abhay@chatgpt.com"; 
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 



