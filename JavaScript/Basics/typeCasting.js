//Implicit -> JavaScript automatically converts types in certain situations
let str = "5";
let num = 10;

let result = str + num; // Implicit type casting: string + number results in a string
console.log(result); // Output: "510"
console.log(typeof result); // Output: string

//Explicit -> We can manually convert types using functions like Number(), String(), etc.
let explicitResult = Number(str) + num; // Explicit type casting: converting string to number
console.log(explicitResult); // Output: 15
console.log(typeof explicitResult); // Output: number

let no = 22;
let str2 = String(no); // Explicit type casting: converting number to string
console.log(str2); // Output: "22"
console.log(typeof str2); // Output: string

let number = 24747;
let str3 = number.toString(); // Explicit type casting: converting number to string using toString()
console.log(str3); // Output: "24747"
console.log(typeof str3); // Output: string