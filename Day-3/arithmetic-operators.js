//area of a triangle
let base = Number(prompt("enter base of the triangle"));
let height = Number(prompt("enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);

//perimeter of a triangle
let sideA = Number(prompt("enter side A of the triangle"));
let sideB = Number(prompt("enter side B of the triangle"));
let sideC = Number(prompt("enter side C of the triangle"));
let perimeter = sideA + sideB + sideC;
console.log(`the perimeter of the triangle is ${perimeter}`)

//area and perimeter of a rectangle
let length = Number(prompt("enter length of the rectangle"));
let width = Number(prompt("enter width of the rectangle"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`)

//area and circumference of a circle
const pi = 3.14
let radius = Number(prompt("enter radius of a circle"));
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

//pay of a person
let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`)

//number of seconds a person has live
let secondsInseconds = 60;
let secondsInHour = secondsInseconds * 60;
let secondsInDay = secondsInHour * 24;
let secondsInYear = secondsInDay * 365;
let yearsLive = Number(prompt("how many years have you live?"));
let secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)

//truthy and falsy
let truthy = [true, "victor", 3];
let falsy = [false, undefined, null];

//ternary operator
const firstName = "victor"
const lastName = "kenneth"
firstName.length > lastName.length ? console.log(`your first Name is greater than your family name`) : console.log(`your last name is greater than your name`);

//allowed to drive
let age = Number(prompt("what is your age"));
if (age > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${age}, you will be allowed to drive after ${18 - age} years`)
}

//time object
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`year:${date.getMonth()}`);
console.log(`year:${date.getDate()}`);
console.log(`year:${date.getDay()}`);
console.log(`year:${date.getHours()}`)
console.log(`year:${date.getMinutes()}`)
console.log(`year:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);