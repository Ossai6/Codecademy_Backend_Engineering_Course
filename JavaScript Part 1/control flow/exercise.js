//A function that takes two numbers and returns the max of the two
function maxNumber(number1, number2) {
    return (number1 > number2) ? console.log(number1) : console.log(number2);
}

maxNumber(2, 8);

//A function that returns TRUE if the width > height(landscape) otherwise FALSE(potrait)
isLandscape(45 , 44)
function isLandscape(width, height) {
    return (console.log(width > height));
}

//A function that checks speed, if driving under or at the speed limit, display OK. for every 5k above the speed limit, get 1 point. if points > 12, license suspended
function checkSpeed(speed) {
    let speedLimit = 70;
    if (speed <= speedLimit) console.log('OK')
    else {
        const points = Math.floor((speed - speedLimit)/5);
        if (points > 12) console.log('License suspended');
        else console.log(points);
    }
}
checkSpeed(135);


//Afunction that takes an array, and returns the number of trusy elements in the array
function countTruthy(array) {
    let count = 0; 
    for (let element of array)
        if (element) 
            count++;

    console.log(count);
}
countTruthy([0,1,2,3,'', "", NaN, 100 ])

//A function that  take an object and displays all the properties of the object that are of type STRING
function showProperties(obj) {
    for (let element in obj) {
        if (typeof obj[element] === "string") {
            console.log(element, obj[element]);
        }
    }
}

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

//A function that takes a number, rerutns the sum of all the multiples of 3 and 5 between 0 and that number.
function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i%3 === 0 || i%5 === 0) {
            sum += i;
        }
    }

    console.log(sum);
}
sum(15);

//A function that calculates the grade of a student

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum/array.length
}
function calculateGrade(marks) {
        const average = calculateAverage(marks);
        let grade = "";
        if (average < 60) grade = 'F';
        else if (average < 70) grade = 'D';
        else if (average < 80) grade = 'C';
        else if (average < 90) grade = 'B';
        else grade = 'A';
    console.log(grade);
}

calculateGrade([0, 100, 100]);