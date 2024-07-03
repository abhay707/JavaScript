const MyObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift: "swift by apple"
}

for (const key in MyObj) {
    // console.log(`${key} shortcut is for ${MyObj[key]}`);
}

const arr = ["cpp","java","c","swift"]

for(const key in arr){
    console.log(arr[key]);
}