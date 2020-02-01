const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillsTxt = JSON.stringify(skills)
console.log(skillsTxt);

let age = 250;
const ageTxt = JSON.stringify(age)
console.log(ageTxt)

let isMarried = true
const isMTxt = JSON.stringify(isMarried)
console.log(isMTxt);

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
let studentTxt = JSON.stringify(student)