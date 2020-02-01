let a = [ 4, 5, 8, 9]
let b = [3, 4, 5, 7]
let A = new Set(a);
let B = new Set(b);

let intersection = a.filter(num => {
    return B.has(num)
})
console.log(intersection)

let union = [...a, ...b]
console.log(union);

