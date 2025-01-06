//Kelvin Weather Project

//today's forcast in kelvin
const kelvin = 293;
//converted today's forcast from kelvin to celcius
let celcius = kelvin - 273;
//converted today's forcast from celcius to fahrenheit
let fahrenheit = celcius * (9/5) + 32;
//rounded up the value to whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)