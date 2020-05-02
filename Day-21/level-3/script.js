const body = document.querySelector("body")
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector("p");
const lis = document.querySelectorAll("li")

//body styling
body.style.textAlign = "center"
body.style.fontFamily = "sans-serif"

//h1 chameleon styling
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020<span>`
let year = document.querySelector("#year");
let color;
const chameleon = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color;
}
setInterval(chameleon, 1000)

//h2 decoration
h2.style.textDecoration = "underline"

p.textContent = Date();
p.style.border = "solid"
p.style.width = "300px";
p.style.margin = "0 auto"
//body.appendChild(p)
//headColor()
const chameleon2 = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    // year.style.color = color;
    p.style.backgroundColor = color;
}
setInterval(chameleon2, 1000)

lis.forEach(li => {
    li.style.listStyle = "none";
    li.style.border = "solid";
    li.style.margin = "0 auto"
    li.style.width = "650px";
    li.style.height = "40px"
    if (li.textContent.toLowerCase().includes("done")) {
        li.style.backgroundColor = "green"
    } else if (li.textContent.toLowerCase().includes("ongoing")) {
        li.style.backgroundColor = "yellow"
    } else {
        li.style.backgroundColor = "red"
    }
});