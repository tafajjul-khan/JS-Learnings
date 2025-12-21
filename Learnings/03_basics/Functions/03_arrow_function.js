const user = {
    username: "tafajjul",
    price: 399,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "taffu"
// user.welcomeMessage()

// console.log(this)



// function chaye(){
//     let username = "tafajjul"
//     console.log(this.username)
// }

// chaye()

const chaye = () => {
    let username = "tafajjul"
    console.log(this)
    console.log(this.username)
}

// chaye()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicete return 
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "tafajjul"})
console.log(addTwo(8, 9))


const myArr = [2, 3, 4, 5, 5]

// myArr.forEach()