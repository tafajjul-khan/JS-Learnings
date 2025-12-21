// singleton
// Object.create()


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "tafajjul",
    "full name": "tafajjul khan",
    [mySym]: "mykey1",
    age: 18,
    location: 'bhopal',
    email: "tafajjulk90@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "taffu786@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "taffu76@gmail.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log('hello js user')
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

