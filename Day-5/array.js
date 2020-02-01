let food = ["rice", "plantain", "beans", "yam", "indomie"];
console.log(food.length);
let firstItem = console.log(food[0]);
let middleItem = console.log(food[3]);
let lastItem = console.log(food[food.length - 1]);

let mixedDataType = ["victor", 19, true, null, {
    favoriteFood: ["beans", "plantain", "rice and stew"]
}, undefined]

let techCompanies = ["google", "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];
console.log(techCompanies);
console.log(techCompanies.length);
console.log(techCompanies[0]);
console.log(techCompanies[4]);
console.log(techCompanies[techCompanies.length - 1]);
let searchTechComp = prompt("enter company to search");
if (techCompanies.includes(searchTechComp)) {
    console.log(searchTechComp)
} else {
    console.log("company not found")
}

let oo = []
for (let i = 0; i < techCompanies.length; i++) {
    oo.push(techCompanies[i].includes("oo"));
}
techCompanies.sort();
techCompanies.reverse();
techCompanies.slice(0, 3);
techCompanies.slice(techCompanies.length - 1, 3)
techCompanies.slice(Math.floor(techCompanies.length / 2), 1);
techCompanies.pop();
techCompanies.length = 0;

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
text.split("");
console.log(text.length);

let shoppingCart = ["milk", "coffee", "tea", "honey"]
shoppingCart.unshift("meat");
shoppingCart.push("sugar");
shoppingCart[shoppingCart.indexOf("tea")] = "green tea";

let frontend = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backend = ['Node', 'Express', 'MongoDB'];
console.log(frontend.concat(backend));

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let minAge = ages.sort()[0];
let maxAge = ages.sort()[ages.length - 1];
console.log(minAge);
console.log(maxAge);
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);
let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}
console.log(avgAge)
let range = maxAge - minAge;
console.log(range);
let ma = abs(minAge - avgAge);
let maa = abs(maxAge - avgAge);
console.log(ma);
console.log(maa);
