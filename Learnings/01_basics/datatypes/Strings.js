// Strings 

const name = "tafajjul"
const repoCount = 50

// console.log(name + repoCount + " value")// outdated formate 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String("tafajjul-kt")

// console.log(gameName[0])

// console.log(gameName.__proto__)

// console.log(gameName.length)

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt())

// console.log(gameName.indexOf('t'))

const newString = gameName.slice(0, 5)
// console.log(newString)

// practice string methods 

const anotherSlice = gameName.slice(-7, 4)
// console.log(anotherSlice)

const newString2 = "  taffu   "
// console.log(newString2)
// console.log(newString2.trim())

const url = "https://tafajjul.com/tafajjul%50khan"

// console.log(url.replace('%50', '-'))

// console.log(url.includes('khan'))

console.log(gameName.split('-'))


// learn and practice more about strings

