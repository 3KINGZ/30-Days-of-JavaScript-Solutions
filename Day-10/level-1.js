//Set

let set = new Set();
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);
set.delete(5);
console.log(set)
set.clear();

let names = ["victor", "fred", "ryan", "femi", "badejo"]
let namesSet = new Set();
names.forEach(name => {
    set.add(name)
})
console.log(set)

let countries = ["nigeria", "U.S.A", "germany", "england", "italy"]
let countriesLength = new Set();
for (let i = 0; i < countries.length; i++){
        countriesLength.add(countries[i])
        countriesLength.add(countries[i].length);
}
console.log(countriesLength);