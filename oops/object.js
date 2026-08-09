class Student{
    constructor(){
        this.roll = null
        this.name = null
    }

    takeLeave(){
        console.log("on leave")
    }

    bunkClass(){
        console.log("Go out for coding")
    }
}

const studnet = new Student
studnet.name = "Tafajjul khan"
studnet.roll = 456
console.log(studnet.roll)
studnet.bunkClass()
