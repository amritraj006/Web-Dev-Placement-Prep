//Global Scope -> A variable declared outside any function or block. We can access the variable inside or outside the block

// let name = "Amrit";

// function greet() {
//     console.log(name);
// }

// greet();
// console.log(name);

//Function Scope -> A let const and var variable declared inside a function are available only inside that function

// const greet = () => {
//     let msg = "Hello";
//     console.log(msg);
// }

// greet();
// console.log(msg); //Refrence error because ms is not defined

//Block Scope -> only Let and const are block scope , a block is inside curly braces

// {
//     let a = 10;
//     const b = 20;
//     var c = 30

//     console.log(a); //10
//     console.log(b); //20
//     console.log(c);
// }

// console.log(a); //Reference Error
// console.log(b); //Reference Error
console.log(c); //Var can be accessible outside block scope because its ignores block scope 




