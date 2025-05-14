console.log('JavaScript Types Excercise');

function exercise1() {
    // Declare and instantiate a number and return it
    const num = 5;
    return num;
}

function exercise2() {
    // Declare and instantiate a floating point number that is not a whole number and return it
    const fl = 3.14;
    return fl;
}

function exercise3() {
    // Declare and instantiate a string "Hello World!" and return it
    const str = "Hello World!";
    return str;
}

function exercise4() {
    // Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    const arr = ["Hellow World!", 4]
    return arr;
}

function exercise5() {
    // Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    const obj = { key1: "Hello World!", key2: 4};
    return obj;
}

function exercise6() {
    // Declare and instantiate a boolean value 'false' and return it
    const bool = false;
    return bool;
}

console.log('This should be a number:', exercise1());
console.log('This should be a floating point number:', exercise2());
console.log('This should be a string saying "Hello World":', exercise3());
console.log( 'This should be an array that includes a string, "Hello World," and a number 4:', exercise4());
console.log('This should be an object that has key-value pairs, key1 -> "Hello World" and key2 -> 4:', exercise5());
console.log("This should be a boolean value that returns 'false':",exercise6());