// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

// let myCreatedDate = new Date(2025, 1, 22)
// let myCreatedDate = new Date(2025, 1, 22, 5,3)
// let myCreatedDate = new Date("2025-02-14")
let myCreatedDate = new Date("02-14-2026")
console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamps = Date.now()
// console.log(myTimeStamps)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})