//create a function sum() that takes a variable number of arguments and returns their sum

function sum(...args) {
    return args.reduce((a, b) => a + b );
}

console.log(sum(10, 9, 8));