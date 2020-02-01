//diiference between forEach,map,filter,and reduce
/*
forEach
the forEach method takes in an array
 and execute a function for each element in
 the array 
*/

/*map
the map method produces a new array
 from the provided callback function
 to be executed on each array
*/

/*filter
this also creates a new array that 
passes the test of the callback function provided
*/

/*reduce
this produces a single value from an array
provided it meets the callback function
*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [{
        product: 'banana',
        price: 3
    },
    {
        product: 'mango',
        price: 6
    },
    {
        product: 'potato',
        price: ' '
    },
    {
        product: 'avocado',
        price: 8
    },
    {
        product: 'coffee',
        price: 10
    },
    {
        product: 'tea',
        price: ''
    }
]

countries.forEach(country => {
    console.log(country)
})

names.forEach(name => {
    console.log(name)
})

numbers.forEach(num => {
    console.log(num)
})

let uppCaseCountries = countries.map(country => {
    return country.toUpperCase();
})
console.log(uppCaseCountries);

let countriesLength = countries.map(country => {
    return country.length
})
console.log(countriesLength);

let squareNum = numbers.map(num => {
    return num * num
})
console.log(squareNum);

let uppCaseNames = names.map(name => {
    return name.toUpperCase();
})
console.log(uppCaseNames);

let prices = products.map(product => {
    return `${product.product}:${product.price}`
})
console.log(prices)

let countriesWithLand = countries.filter(country => {
    return country.toLowerCase().includes("land")
})
console.log(countriesWithLand);

let countriesWith6chars = countries.filter(country => {
    return country.length === 6;
})
console.log(countriesWith6chars);

let countriesWith6charsMore = countries.filter(country => {
    return country.length >= 6;
})
console.log(countriesWith6charsMore);

let countriesStartingWithE = countries.filter(country => {
    return country[0].toLowerCase === "e";
})
console.log(countriesStartingWithE);

let pricesWithValues = products.filter(product => {
    return product.price > 0;
})
console.log(pricesWithValues);

const getStringList = (arr) => {
    let nn = arr.filter(item => {
        return typeof item === "string"
    })
    return nn;
}

let nn = getStringList(["victor", 3, 5, "kenneth"]);
console.log(nn);

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(sumOfNumbers)

let joinCountries = countries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(joinCountries);

//every checks if all elements in an array are similar in all aspects
//some checks if some elements are elements are similar in one aspect

let isSomelength6 = countries.some(country => {
    return country.length > 6;
})
console.log(isSomelength6)

let isCountryIncludesLand = countries.every(country => {
    return country.toLowerCase().includes("land")
})
console.log(isCountryIncludesLand);

//find returns the first element which satisfies the condition
//findIndex returns the first index elemnt whic satisfiy the condition

let firstCountry6Chars = countries.find(country => {
    return country.length === 6
});
console.log(firstCountry6Chars);

let firstIndexPosCountry6Chars = countries.findIndex(country => {
    return country.length === 6
});
console.log(firstIndexPosCountry6Chars);

let firstIndexPosNorwayExist = countries.findIndex(country => {
    return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);

let firstIndexPosRussiaExist = countries.findIndex(country => {
    return country.includes("Russia")
});
console.log(firstIndexPosRussiaExist);