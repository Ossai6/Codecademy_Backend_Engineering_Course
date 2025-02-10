const numbers = [3, 4];

numbers.push(5, 6); //add to the end
numbers.unshift(1, 2); //add to the begining 
numbers.splice(2, 0, 'a'); //add to the begining

console.log(numbers);

console.log(numbers.indexOf('a')); //finds an element


const courses = [
    {
        id: 1, name: 'a'
    },
    {
        id: 2, name: 'b'
    }
];

console.log(courses.find(function(course) {
    return course.name === 'a';
}));

//concat two arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);

const courses1 = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Java'}
];

courses1.sort(function(a, b) {});
console.log(courses1);
