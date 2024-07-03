const coding = ["cpp","java","c","swift"]

// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

// coding.forEach(printme)


coding.forEach( (item,index,arr) => {
    // console.log(item, index , arr);
})


const myCoding = [
    {
        languageName: "java",
        languageFile: "java"
    },

    {
        languageName: "python",
        languageFile: "py"
    },

    {
        languageName: "C++",
        languageFile: "cpp"
    },

    {
        languageName: "javaScript",
        languageFile: "js"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})