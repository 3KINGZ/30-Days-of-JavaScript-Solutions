let student = {
    firstName: "victor",
    lastName: "kenneth",
    age: 19,
    skills: ["html", "css", "javascript", "netlify"],
    country: "nigeria"
}

let txt = JSON.stringify(student)
localStorage.setItem("s1", "txt")