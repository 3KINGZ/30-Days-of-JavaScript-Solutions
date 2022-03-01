function fullName() {
    console.log("victor kenneth")
}
fullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("victor", "kenneth");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(2, 5);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(5, 3);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 5);

volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(2, 3, 4);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(7);

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(6);

density = (mass, volume) => {
    return mass * volume;
}
density(4, 8);

speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);

celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI(4, 7);

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");

findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(5, 7, 4)

printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)

reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArr([3, 4, 5])

capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(1, 2, 3, 4)

sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(1, 2, 3, 4)

sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
}
sum(1, 2, 3)

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

generateRandomMacAdd = () =>{
    let macAsset = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    
       
       let one1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let one2 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let two1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let two2 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let three1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let three2 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let four1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let four2 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let five1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let five2 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let six1 = macAsset[Math.floor(Math.random()*macAsset.length)]
       let six2 = macAsset[Math.floor(Math.random()*macAsset.length)]



       return`${one1}${one2}-${two1}${two2}-${three1}${three2}-${four1}${four2}-${five1}${five2}-${six1}${six2}`
   
}
console.log(generateRandomMacAdd())

generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
generateRandomHex();

generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();

userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let noId = Number(prompt("how many id do you want to generate"));
    let noChars = Number(prompt("in how many chars"));
    let ids = [];
    for (i = 0; i < noId; i++) {
        ids[i] = "";
        for (k = 0; k < noChars; k++) {
            ids[i] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    console.log(ids)
    ids.forEach(function (id) {
        console.log(id);
    })
}
userIdGeneratedByUser();

rgbColorGnerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();

arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();

generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${ Math.floor(Math.random() * 255) },`;
            colors[i] += `${ Math.floor(Math.random() * 255) },`
            colors[i] += `${ Math.floor(Math.random() * 255) },)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
generateColors("rgb", 3);

shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
shuffleArray([1, 2, 3]);

factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
factorial(5);

isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
isEmpty()

sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sum(1, 2, 3, 4);

sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar
        } else {
            sum = `it's a string`
        }
    })
    return sum;
}
sumOfArrayItems([1, 2, 3])

average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
            sum = arr.length / sum;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
average([1, 2, 3]);

modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
modifyArray([1, 2, 3]);

isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not prime`
        }
    }
}
isPrime(5);

reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries();
