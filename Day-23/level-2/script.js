let body = document.querySelector("body");
let keyName = document.querySelector(".key");
let keyCode = document.querySelector(".key-code");
let input = document.querySelector("input")
console.log("hiii")
// body.addEventListener("keypress", function (e) {
//     keyCode.innerHTML = ""
//     keyName.innerHTML = ""
//     keyName.innerHTML = e.keyName;
//     console.log(e.keyCode)
//     console.log(e.keyName)
//     keyCode.innerHTML = e.keyCode;
// });
body.addEventListener("keydown", function (e) {
    keyCode.innerHTML = ""
    keyName.innerHTML = ""
    let keyMessage = `<h1>you pressed <span class="green">${e.key}</span></h1>`
    keyName.innerHTML = keyMessage;
    let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`
    keyCode.innerHTML = keyCodeMessage;
});