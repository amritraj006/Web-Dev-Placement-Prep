// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5); //This loop runs once even if condition is false

// let i = 10;

// do {
//     console.log(i);
// } while (i < 5);

// let arr = [1, 2, 3, 4, 5];
// for (let i in arr) { //This loop is best for iterate arrays and objects
//     console.log(i);
// }

// let str = "Amrit";
// for (let c in str) {
//     console.log(c);
// }

const userDetails = {
    name: "Amrit Raj",
    age: 22,
    course: "B-Tech",

    show() {
        for (let key in userDetails) { //This is used to iterate over objects in ket value pair we can also use it in Arrays but its not recommended
            console.log(key, "=", userDetails[key]); 
        }
    }
}

userDetails.show();