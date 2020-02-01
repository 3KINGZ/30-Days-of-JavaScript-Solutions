console.log(countries);
console.log(webTechs);

if (countries.includes("ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("ethipia");
}

if (webTechs.includes("sass")) {
    console.log("sass is a preprocessor")
} else {
    webTechs.push("sass");
}

countries.forEach(function (country) {
    let p = document.createElement("p");
    p.textContent = country;
    document.querySelector("#countries").appendChild(p);
})

webTechs.forEach(function (webTech) {
    let p = document.createElement("p");
    p.textContent = webTech;
    document.querySelector("#web-technologies").appendChild(p);
})

let middleCountry = document.createElement("p");
middleCountry.textContent = `the middle country is ${countries[countries.length / 2]}`

if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    countries.push("korea");
    let b = countries.length / 2;
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}