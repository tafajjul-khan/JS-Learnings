//  learn about constructor property and instanceof method

// let myName = "tafajjul    "
// console.log(myName.truelength);

let myheros = ["thor", "spiderman"]
let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.taffu = function(){
    console.log("taffu is prsent in all objects")
}

Array.prototype.heyTaffu = function(){
    console.log("Taffu says hello")
}

// heroPower.taffu()

// myheros.taffu()
// myheros.heyTaffu()
// heroPower.heyTaffu()

// inheritence
const User = {
    name: "Taffu",
    email: "Taffu@gmailc.om"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTIme: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Taffuorcode     "
String.prototype.truelength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()

"taffjjul  ".truelength()
