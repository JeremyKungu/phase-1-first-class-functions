function receivesAFunction(exercise) {
    exercise();
}

function returnsANamedFunction() {
    return function eatUp() {
        console.log("This food is delicious!!")
        } 
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Awesome concept!")
    }
}

