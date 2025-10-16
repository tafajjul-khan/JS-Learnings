// If statment

const isUserloggedIn = true;

const temp = 41;

// if (temp === 41) {
//   console.log("less than 50");
// } else {
//   console.log("temp grater than 50");
// }

// comparison oprator
// < , > , <=, >= , == , != , ===, !==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("allow to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}

