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

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'italy', 'spain', 'germany', 'portugal', 'england', 'netherland', 'belgium', 'france', 'nigeria', 'U.S.A'];

let totalPrice = products.map(product => {
    return product.price;
}).filter(price => {
    return price > 0;
}).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(totalPrice);

// let sumOfProducts = products.reduce((accumulator, currentValue) => {
//     if (products.price > 0) {
//         return accumulator + currentValue.price
//     }
// })
// console.log(sumOfProducts);

const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries(countries));

const getFirstTenCountries = (countries) => {
    let firstTen = [];
    firstTen = countries.map(country => {
        return country;
        })
    return firstTen;
}

console.log(getFirstTenCountries(countries));