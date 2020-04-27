//level-1
let dog = {};
console.log(dog);
dog.name = "jasper";
dog.legs = 4;
dog.color = "brown"
dog.age = 4;
dog.bark = function () {
    console.log("woof woof woof")
}
console.log(Object.values(dog));
dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}