// nested scope

function one() {
    const username = "taffu"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    two()
}

// one()

if (true) {
    const username = "taffu"
    if(username === "taffu") {
        const website = "github"
        // console.log(username + " " + website)
    }
    // console.log(website)
}
// console.log(username)

// =========== intersting example =============


console.log(addOne(6))
// addOne(5)

function addOne(num) {
    return num + 1
}


addTwo(4) // errror
const addTwo = function(num){
    return num + 2
}

