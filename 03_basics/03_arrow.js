// const user = {
//     username: "abhay",
//     price: 22,

//     welcome: function(){
//         console.log(`${this.username} welcome`);
//         // console.log(this); //this keyword will give us current context
//     }

// }

// user.welcome();
// user.username = "Sam"
// user.welcome();

//Inside node or any environment this is empty but in browser this will return windows 
// console.log(this);

//We cannot use this inside function it only works objects
// function chai(){
//     let username = "Abhay";
//     console.log(this.username); //undefined
// }

chai()


//Arrow Function
// () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}