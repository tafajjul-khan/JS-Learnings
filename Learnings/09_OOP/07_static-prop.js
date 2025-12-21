class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const tafajjul = new User("tafajjul")
// console.log(tafajjul.createId())


class Teacher extends User {
    constructor(username ,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
iphone.logme()
// console.log(iphone.createId())
