class Empolyee{
    constructor(){
        this.id = null
        this.name = null
    }

    setId(id){
        this.id = id
    }

    setName(name){
        this.name = name
    }

    getId(id){
        return this.id
    }

    getName(name){
        return this.name
    }
}

const emp = new Empolyee
emp.setId(120)
emp.setName("Taffu")

// Using getters
console.log('Employee ID: ' + emp.getId());
console.log('Employee Name: ' + emp.getName());