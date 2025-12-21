const user = {
    username: "tafajjul",
    logincount: 6,
    signedIn: true,
    
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this)

function User(username, email, password,){
    this.username = username
    this.email = email
    this.password = password

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userone = new User("hitesh", "tafajjulk90@gmail.com", "67968")
const usertwo = new User("hitesh", "tafajjulk90@gmail.com", "67968")
// console.log(userone.constructor)
console.log(usertwo)

