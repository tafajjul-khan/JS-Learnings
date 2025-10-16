const myNum = [1, 2, 3];

// const myTotal = myNum.reduce(function (acc, curval) {
//     console.log(`'acc': ${acc} and current Value ${curval}`)
//     return acc + curval
// }, 0)

const myTotal = myNum.reduce((acc, curval) => acc + curval, 0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "c++ course",
        price: 999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay)

