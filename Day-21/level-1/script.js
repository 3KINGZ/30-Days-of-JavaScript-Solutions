//get by id;
const firstP = document.getElementsByTagName("p")[0];
console.log(firstP)

//get by id
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
console.log(one)
console.log(two)
console.log(three)
console.log(four)

//get all the p as nodeList 
let pS = document.querySelectorAll('p');
// pS = Array.from(pS)
console.groupCollapsed(pS)

pS.forEach(p => {
    console.log(p.textContent)
})

pS[3].textContent = "fourth paragraph"

pS[0].className = "first-pararaph";
pS[0].id = "first";
//setAttribute
pS[1].setAttribute("class", "second");
pS[1].setAttribute("id", "second");
//adding a class to another class
pS[2].classList.add('title', 'third')