//Array destructuring
const values = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = values;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingPoint);

let countries = ["finland", "estonia", "sweden", "denmark", "norway"];
let [fin, est, sweden, den, nor] = countries;
console.log(fin, est, sweden, den, nor)

//object destructuring
let rectangle = {
    width: 7.23,
    height: 3.45
}

let {
    width: w,
    height: h
} = rectangle;
console.log(w, h)


let countries = [{
        name: "nigeria",
        capital: "fct",
        population: "7billion",
        languages: ["hausa", "igbo", "yoruba"]
    },
    {
        name: "germany",
        capital: "munich",
        population: "5billion",
        languages: ["german"]
    }, {
        name: "italy",
        capital: "rome",
        population: "6billion",
        languages: ["italian", "latin"]
    },
    {
        name: "france",
        capital: "paris",
        population: "6billion",
        languages: ["french"]
    }
]

let [name, capital, population, languages] = countries;
console.log(name, capital, population, languages);

const student = ['David', ['HTM', 'CSS', 'JS', 'React'],
    [98, 85, 90, 95]
]
let [name, skills, scores, javaScriptScores, reactScores] = student;
console.log(name, skills, scores, javaScriptScores, reactScores)

