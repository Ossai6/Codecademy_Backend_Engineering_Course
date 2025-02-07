//ARITHMETIC OPERATORS
let x = 10;
let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

//INCREMENT
console.log(++x); //Incremented and displays the change
console.log(x++); //Increments, displays the original value before displaying the change 

//ASSIGNMENT OPERATORS
//COMPARISON OPERATORS
//relational 
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
//strict equality - checks for both type and value 
console.log(x === 1);
console.log(x !== 1);
//loose equality - if the types dont match, it converts the right to the date type of the left and checks the values
console.log('1' == 1);
console.log(true == 0);

//TERNARY OPERATORS
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//LOGICAL OERATORS
//logical and && Returns TRUE if both operands are TRUE 
//logical or || Returns TRUE if one of the operands is TRUE 
//NOT !

//NOTE: In JavaCsript, the result of the logical operator is not neccesarily TRUE or FALSE. IT DEPENDS O THE VALUE OF THE OPERANDS. IF THE OPERANDS IS NOT A BOOLEAN IT WILL TRY TO CHANGE IT TO TRUTHY AND FALSY VALUES
//Falsy values are: undefined, null, 0, false, '', NaN
//logical operators with non-nooleans: The trusy value is returned
console.log(false || 1 || 2) //Evaluation starts from the left, once a trusy value is encountered, the value is returned (This is called short circuiting)

//BITWIISE OPERATORS


//OPERATOR PRECEDENCE


//EXERCISE
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);