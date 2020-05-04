let body = document.querySelector("body")
let input = document.querySelector("input")
let button = document.querySelector("button")
let message = document.querySelector(".warning-message")
let div = document.querySelector(".container")
console.log(message)
button.addEventListener("click", function () {
    let val = input.value;
    if (typeof (Number(val)) === "number" && Number(val) > 0) {
        div.innerHTML = "";
        input.value = ""
        message.innerHTML = "";
        for (let i = 0; i <= val; i++) {
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
    } else if (val.length === 0) {
        div.innerHTML = ""
        input.value = "";
        message.innerHTML = "";
        message.textContent = "enter a number to generate numbers";
        message.style.color = "red"
    } else if (typeof (val) === "string") {
        div.innerHTML = "";
        input.value = "";
        message.innerHTML = "";
        message.textContent = "please enter number values only";
        message.style.color = "red"
    }
})