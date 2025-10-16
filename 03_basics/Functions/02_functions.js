// function with objects 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 600))

const user = {
    username: "tafajjul",
    prices: 499
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "taf",
    price: 389
})

const myNewArr = [600, 300, 700, 900]

function returnSecondValue(getArr) {
    return getArr[1]
}

// console.log(returnSecondValue(myNewArr))
// console.log(returnSecondValue([400, 800, 600, 200]))

