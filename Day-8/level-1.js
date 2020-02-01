//object
let dog = {}
console.log(dog);
dog.name = "ruddy";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
    return "woof, woof, woof";
};
console.log(`name:${dog.name}\nlegs:${dog.legs}\ncolor:${dog.color}\nage:${dog.age}\n${dog.bark()}`);
dog.breed = "great dane";
dog.getInfo = function () {
    return `name:${dog.name}\nlegs:${dog.legs}\ncolor:${dog.color}\nage:${dog.age}\nbreed:${dog.breed}\n${dog.bark()}`
}
console.log(dog.getInfo());