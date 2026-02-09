function Add(a, b) {
    if (a == undefined) a = 0;
    if (b == undefined) b = 0;
    return a + b;

}

console.log(Add(5, 10));
console.log(Add(5));
console.log(Add());






function subtract(a = 0, b = 0) {
    return a - b;
}
console.log(subtract(10, 5));
console.log(subtract(10));
console.log(subtract());




function divide(a = 0, b = 0) {
    return a / b;
}
console.log(divide(10, 5));



function multiply(...params) {
    let result = 1;
    for (let i = 0; i < params.length; i++) {
        result *= params[i];
    }
    return result;
}
console.log(multiply(10, 5));
console.log(multiply(10, 5, 2));
console.log(multiply(10, 5, 1));
console.log(multiply(10, 5, 54));
console.log(multiply(10, 5, 21));
console.log(multiply(10, 5, 1, 2, 4, 5));