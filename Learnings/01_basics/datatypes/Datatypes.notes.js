// Premitive data types

// 7 types of Premitive data types :
// String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100

const scoreValue  = 100.3

const isLoggedIn = false

const outSideTemp = null

let userEmail; 

const userId = Symbol('456')
const user2Id =  Symbol('456')
// console.log(userId === user2Id) // not same

const bigNumber = 45345385756556765675759978569n


// Refrence type (Non Premitive) 
// Array,  Objects, Functions, 


const heros = ['IronMan', 'SpiderMan', 'Hulk', 'Thor']

const myObj = {
    name: "taffu",
    age: 18,
    adress: "bhopal"
}

const myFunction = function () {
    console.log("hello taffu")
}

// console.log(typeof(heros))


// ========================================================

// Stack memory(Primitive) and Heap(Non-premitive) memory

let myName = 'Tafajjul'

let anotherName = myName
anotherName = "Muzameel"

// console.log(myName)
// console.log(anotherName)


let userOne = {
    email: "tafajjulk990@gmail.com",
    upi: "8947349549@ybl",
    password: "tytuhgfd547"
}

let userTwo = userOne

userTwo.email = "muzameel786@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)