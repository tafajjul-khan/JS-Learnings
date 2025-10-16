// singleton, object declare with cuntructur


// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "taffu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "taffu786@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tafajjul",
            lastname: "khan"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d", 
    5: "e",
    6: "f"
}
const obj3 = {
    7: "g", 
    8: "h",
}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const  users = [
    {
        id: 1,
        email: "t@gmail.com",
    },
    {
        id: 1,
        email: "t@gmail.com",
    },
    {
        id: 1,
        email: "t@gmail.com",
    }
]

users[1].email
// console.log(tinderUser)

console.log(Object.keys(tinderUser)) // important 
console.log(Object.values(tinderUser)) // important 
console.log(Object.entries(tinderUser)) // important 

console.log(tinderUser.hasOwnProperty('isLogged'))

