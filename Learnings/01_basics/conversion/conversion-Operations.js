// conversion and operations

let score = "taffu";

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score);
// console.log(typeof valueInNumber)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "hitesh" => true
// NaN => false
//  undefined => false
// null => false
// -0, 0 => false but -2, -6 etc = true
// "0" => true

// in js this 8 VALUES IS FALSE
// => 0, -0, Nan, undefined, null , 0n, " ", false

let someNumber = 44;

let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ============= Operations ==================

let value = 3;
let negValue = -value;
// console.log(negValue)

// 2 + 2
// 2 - 2
// 2 * 2
// 2 ** 2
// 2 / 2
// 2 % 2
// ( ) for more specifity

let str1 = "hello";
let str2 = " taffu";

let str3 = str1 + str2;
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 3)
// console.log(1 + 2 + "3")

//console.log((3 + 4) * 5 % 3) // use parenthecess

//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// console.log(true + 2)
// console.log(+true) // not write confusing code
// console.log(true)
// console.log(+"") // not good


let num1 , num2, num3
num1 = num2 = num3 = 2 + 2 // write readable codes


let gameCounter = 100
// gameCounter ++ ;
++gameCounter
// console.log(gameCounter)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


