let a = 3;
a = 4;

let b = 4;
b = 5;

console.log(a); // Output: 4 //Let can be reassigned, but cannot be redeclared in the same scope.
console.log(b); // Output: 5 //Let can be reassigned, but cannot be redeclared in the same scope.

var c = 5;
c = 6;

// var c = 7; // Redeclaring a variable with var is allowed in the same scope.

console.log(c); // Output: 7 //Var can be reassigned and redeclared in the same scope.

const d = 8;
// d = 9; // This will throw an error because const cannot be reassigned.

console.log(d); // Output: 8 //Const cannot be reassigned or redeclared in the same scope.