//write a function called arrayFromRange(min, max)

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    console.log(output);
}

const numbers = arrayFromRange(1, 5);