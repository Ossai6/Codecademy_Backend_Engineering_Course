const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('Draw');
    }
};

//WAYS TO CREATE ONJECTS
//1-FACTORY FUNCTION
function createCirle(raduis) {
    return {
        raduis,
        draw() {
            console.log('Draw');
        }
    };
}

const circle1 = createCirle(3);
circle1.name = "Hey"; //Creates a new property
delete circle1.name; //Deletes a property
console.log(circle1.constructor);

//2-CONSTRUCTOR  FUNCTIONS
//use pascal variable naming convention

function Circle(raduis) {
    this.raduis = raduis;
    this.draw = function() {
        console.log('Draw');
    }
}

const circle3 = new Circle(1);
console.log(circle3.constructor);
//when u use the new operator, 3 things happen.
//1-The operator create an empty onject
//2-it will set this to point to the object
//3-it wil return the object from the function


