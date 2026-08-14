const arr = [2,34,4,24,4];

// const [first, second] = arr; //Desct -> extract values from array into a seperate variable 
// console.log(first);

// const [a, , c] = arr; //Skips values
// console.log(c); 

// const arr = [10];
// const [d, e = 20] = arr; //Default values
// console.log(e);

const [a, b, ...rest] = arr; //The rest operator collects the remaining elements into a new array.
console.log(...rest); //The spread operator (...) expands an array into individual elements.

