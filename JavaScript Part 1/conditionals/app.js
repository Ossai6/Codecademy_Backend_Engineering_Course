//Magic Eight Ball PROJECT
/*
In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/

let userName = 'Caleb';
userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

let userQuestion;
console.log(`${userName} asked: ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(eightBall)



//Race Day PROJECT
/*
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

let raceNumber = Math.floor(Math.random() * 1000);
let EarlyRegTime = false;

let age = 18;

if (EarlyRegTime && age > 18) {
  raceNumber += 1000;
} 

if (age > 18 && EarlyRegTime) {
  console.log(`Race Number: ${raceNumber}. You race at 9:30am prompt.`);
} else if (age > 18 && !EarlyRegTime) {
  console.log(`Race Number: ${raceNumber}. You race at 11:00am prompt.`);
}

if (age < 18) {
  console.log(`Race Number: ${raceNumber}. You race at 12:30pm prompt.`);
} else if (age === 18) {
  console.log(`Race Number: ${raceNumber}. Please register at the registration desk.`);
}