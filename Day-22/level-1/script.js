let body = document.querySelector("body")
let div = document.querySelector("div")
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "green"
        box.style.margin = "8px";
        div.appendChild(box)
    } else {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "yellow"
        box.style.margin = "8px";
        div.appendChild(box)
    }
}