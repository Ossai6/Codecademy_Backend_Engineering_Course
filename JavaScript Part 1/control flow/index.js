let hour = 19;

if (hour >= 6 && hour < 12) {
    console.log('Good morning')
} 
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
}
else if (hour >= 18 && hour < 24) {
    console.log('Good night')
}

//SWITCH
let role = 'admin';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    case 'admin':
        console.log('Admin User');
        break;
    default:
        console.log('Unknown User')
}


//FOR LOOP
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++
}

//for in loop: used to iterate the properties of an object.
const person = {
    name: 'Caleb',
    age: 29
}

for (let key in person)
    console.log(person[key]);