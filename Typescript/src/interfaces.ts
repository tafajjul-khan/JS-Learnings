interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masalaChai: Chai = {
    flavor: "masala",
    price: 30
}


interface Shop {
    readonly id: number
    name: string
}

const s:Shop = {id: 1, name: "Khan chai center"}
// s.id = 7

interface DiscountCalculator{
    (price: number): number
}

const apply70: DiscountCalculator = (p) => p* 0.7

interface TeaMachine{
    start(price: number): void;
    stop(): void
}

const machine: TeaMachine = {
    start(){
        console.log("start")
    },
    stop() {
        console.log("stop..")
    },
}

// index signature
interface ChaiRating {
    [flavor: string]: number
}

const ratings: ChaiRating = {
    masla: 4.5,
    ginger: 5.5
}

interface User{
    name: string
}

interface User{
    age: number
}

const u: User = {
    name: "taffu",
    age: 19
}

interface A{a: string}
interface B{b: string}

interface C extends A,B {}

