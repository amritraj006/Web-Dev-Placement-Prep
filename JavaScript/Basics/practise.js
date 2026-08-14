// let str = "Amrit Raj";
// let num = 22;

// console.log(`My name is ${str} and I am ${num} years old.`);

// console.log("5" + 2); // Output: "52" (string concatenation)
// console.log("5" - 2); // Output: 3 (number subtraction)
// console.log("5" * 2); // Output: 10 (number multiplication)
// console.log("5" / 2); // Output: 2.5 (number division)

// console.log(typeof 123n); // Output: bigint
// console.log(typeof 344344343433424244243434343n); // Output: bigint
// console.log(typeof null); // Output: object? 
// console.log(Number("10abc")); // Output: NaN (Not a Number)
// console.log(Number("10")); // Output: 10

// console.log(String(1343)); // Output: "1343"

// == (Loose Equality) Compares values only, performs type coercion if types are different
//Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
console.log(1 == 1); // Output: true (loose equality, type coercion)
console.log(1 == "1"); // Output: true (loose equality, type coercion)

// === (Strict Equality) Compares values and types, no type coercion
console.log(1 === 1); // Output: true (strict equality, no type coercion)
console.log(1 === "1"); // Output: false (strict equality, no type coercion)

console.log(typeof NaN);
console.log(typeof undefined);
console.log(Boolean("")); // Output: false

