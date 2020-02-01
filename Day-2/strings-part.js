let name = "30 Days Of JavaSscript"
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(0, 1));
console.log(name.slice(3));
let s = "You cannot end a sentence with because because because is a conjunction";
console.log(name.substr(30, 23));
console.log(name.includes("Script"));
console.log(name.split(""));
console.log(name.split(" "));
let techComp = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(techComp.split(","));
console.log(name.replace("JavaScript", "Python"));
console.log(name.charCodeAt("J"));
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("a"));
let sent = "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"))
console.log(sent.search("because"));
console.log(name.trim());
console.log(name.startsWith("3"));
console.log(name.endsWith("t"));
console.log(name.match("a"));
console.log(s.match("a"));
let conc = "30 Days Of "
console.log(conc.concat("JavaScript"));
console.log(name.repeat(2));
let text = "Love is the best thing in this world.Some found their love and some are still looking for their love";
console.log(text.search("love"));
let text2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome
)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
let fName = "victor";
let lName = "kenneth";
let country = "nigeria";
let city = "lagos";
let age = 19;
let isMarried = false
let year = 2020;
let vars = [fName, lName, country, city, age, isMarried, year, name, s, conc, techComp, sent, text, salaries, totalAnnualIncome, sentence];
vars.forEach(element => {
    console.log(typeof element);
})