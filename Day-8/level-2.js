const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//Find the person who has many skills in the users object.

let userSkills = Object.values(users);
let indSkillsLength = [];
for (let i = 0; i < userSkills.length; i++) {
    indSkillsLength.push(userSkills[i].skills.length);
}
console.log(indSkillsLength);
let max = indSkillsLength[0]
for (let i = 0; i < indSkillsLength.length; i++) {
    if (indSkillsLength[i] > max) {
        max = indSkillsLength[i]
    }
}
console.log(max);
console.log(userSkills);
users.name = "victor";
let keysProperties = Object.entries(users)
console.log(keysProperties);
let keys = Object.keys(users);
console.log(keys);

let country = {
    name: "Nigeria",
    capital: "?",
    population: "7 billion",
    languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)