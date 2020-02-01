const food = ["beans", "rice", "plantain", "egg"]

//while
console.time("while loop")
let i = 0
while (i < food.length) {
    console.log(food[i])
    i++
}
console.timeEnd("while loop")
//for
console.time('Regular for loop')
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}
console.timeEnd('Regular for loop')
//for of
console.time("for of")
for (const meal of food) {
    console.log(meal)
}
console.timeEnd("for of")
//forEach
console.time("forEach")
food.forEach(meal => console.log(meal))
console.timeEnd("forEach")


