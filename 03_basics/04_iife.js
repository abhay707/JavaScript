// Immediately Invoked function expression (IIEF)

// To Handle polution caused by the global scope IIFE is used
(function chai(){
    console.log("DB Connected");
})(); //Named

((name)=>{
    console.log(`DB Connected ${name}`);
})("abhay"); //Unnamed

