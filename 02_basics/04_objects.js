const tinderUser = new Object() //declare an empty object

tinderUser.id = "123abc"
tinderUser.name = "Abhay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "example@gmail.com",
    fullName: {
        userFullname:{
            firstname: "abhay",
            lastName: "chaturvedi"
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstname); //nested objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2) //will make it into single object {} all the combined objects will go in it

const obj3 = {...obj1, ...obj2} //spread operation
// console.log(obj3);


const users = [ //array containing multiple objects
    {
        userId: "1",
        email: "abhx@gmail.com"
    },
    {
        userId: "2",
        email: "abhx@gmail.com"
    },
    {
        userId: "3",
        email: "abhx@gmail.com"
    },
    {
        userId: "4",
        email: "abhx@gmail.com"
    }
]

users[1].userId //to excess those objects

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //will give all the keys in array
// console.log(Object.values(tinderUser)); //will give all the value in array
// console.log(Object.entries(tinderUser)); // will make each key value into seprated array

// console.log(tinderUser.hasOwnProperty('isLogged')); //property is available or not

const course = {
    CourseName: "Js",
    price: "999",
    courseInstructor: "Abhay"
}

const {courseInstructor: instrcutor} = course

// console.log(instrcutor); //to access value easily

//JSON
// {
//     "name": "Abhay",
//     "courseName": "Js",
//     "price": "Free"
// }


