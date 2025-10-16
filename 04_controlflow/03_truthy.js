const userEmail = [];

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user Email");
}

// false value

// false, 0, -0, "", NaN, BigInt => 0n, null, undefined

// true values

// "0", [], 'false', " ", {}, function(){},

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 60



// console.log(val1)


// Terniary Operator

// codition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("grater than 80")

