class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color
        this.legs = legs
    }
    getfullInfo() {
        return `${this.name} is ${this.age} year(s) old ${this.color} in color`;
    }
    set removeLegs(leg) {
        this.legs -= leg
    }
    get getName() {
        return this.name;
    }
}

let dog = new Animal("jack", 4, "brown", 4);
let cat = new Animal("brie", 2, "white", 4);

console.log(dog);
console.log(cat);

class Pet extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs)
        this.gender = gender
    }

    get getGender() {
        return this.gender
    }
}

let rabbit = new Pet("ross", 3, "snow-white", 4, "male")
console.log(rabbit);