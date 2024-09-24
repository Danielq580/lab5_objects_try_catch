/**
 * Daniel Quan
 * Sep 17, JavaScript Object
 */

console.log("Daniel Quan")
console.log("\n ------ Example 1 defining an object------")
//create an object named 'car'
const car={
    type: "Fiat", 
    model: 500, 
    color: "white",
}
console.log(`The model of the car is ${car.model}`)

console.log("\n ------ Example 2: use of 'this' keyword in an object ------ ")
//create an object named 'person'
const person = {
    // defining properties
    firstname : "John",
    lastname : "Doe",
    id : 1234,

    //defining methods
    fullname : function (){
        return `${this.firstname} ${this.lastname} `
    }
}

//accessing method 'fullname'
console.log(person.fullname())


console.log("\n ------ Example 3: object constructor using function ------ ")
function course(title, instructor, code, session, students){
    this.title = title,
    this.instructor = instructor,
    this.code = code,
    this.session = session,
    this.students = students
}
//set up values to the object
let course1 = new course("JavaScript programming", "WU", "ET712", "H1", 12 )

//accessing properties
console.log(`The course ${course1.title} has ${course1.students} students` )

console.log("\n ------ Example 4: methods ------ ")
const myMath = {
    //defining methods
    square : function(num){
        return num*num
    },
    double : function(num){
        return num*2
    }
}

//accessing methods
let n =3 
let number1 = myMath.double(n)
let number2 = myMath.square(n)

//print result
console.log(`The double of number ${n} is ${number1}`)


console.log("\n ------ lab 5 ------ ");
const myCalculator = {
    message: "This is one and only Quan's Calculator.",
    side: 2,

   
    area_square: function() {
        return this.side * this.side
    },
    volume_cube: function() {
        return this.side * this.side * this.side
    }
}


console.log(myCalculator.message); 
console.log(`The area of a square with side ${myCalculator.side} is ${myCalculator.area_square()}`)
console.log(`The volume of a cube with side ${myCalculator.side} is ${myCalculator.volume_cube()}`)


/**
 * SEP 19,2024
 * try-catch
 */

console.log("\n ----- Example 1: try-catch -----")
// define a fucntion to display a message in upper-case
function yell(message){
    console.log(message.toUpperCase(). repeat(3))
}

try{
//call the function
yell("Good morning")
yell(123)
}
catch(e){
    console.log(`ERRO! 4{e}`)
}
finally{
    console.log("end of calling function yell()")
}
//after example
console.log("\n ----- lines after example 1 ----- \n")

console.log("\n ------- EXERCISE -------- ")
//Define a JavaScript function named 'devideNumbers' that takes two parameters 'divideNumbers' that tkes two parameters, 'a' abd 'b'
//The function should attempt to device 'a' and 'b' and return the result.
// If the division is undefined, return a message that says 'Error performing the division'
// use try-catch inside the function

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            return 'Error performing the division'
        }
        return a / b
    } catch (e) {
        return 'Error performing the division'
    }
}

console.log(divideNumbers(10, 2))
console.log(divideNumbers(10, 0))