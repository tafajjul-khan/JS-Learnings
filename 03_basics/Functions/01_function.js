// console.log("T")
// console.log("A")
// console.log("F")
// console.log("F")
// console.log("U")

function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("F");
  console.log("F");
  console.log("U");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
  //    let result = num1 + num2
  //    return result
  return num1 + num2;
}

const result = addTwoNumbers(3, 5); // 3 and 4 is arguments , num1 and num2 is  parameters

// console.log("Result: ", result);

function logginUserMassage(usaername = "tafajjul"){
    if(/*usaername === undefined*/ !usaername){
        console.log("please enter the uername")
        return
    }
    return `${usaername} just logged in`
}

// console.log(logginUserMassage("taffu"))
console.log(logginUserMassage())

