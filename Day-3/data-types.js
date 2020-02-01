const firstName = "victor"
const lastName = "kenneth"
const country = "Nigeria"
const city = "lagos"
const age = 19;
const isMarried = false;
const year = new Date().getFullYear();

let vars = [firstName, lastName, country, city, age, isMarried, year];
vars.forEach(function (element) {
    console.log(typeof element);
});

console.log("10" === 10)
console.log(parseInt(9.8) === 10);