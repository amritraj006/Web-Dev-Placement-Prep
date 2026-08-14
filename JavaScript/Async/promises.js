// const promise = new Promise((resolve, reject) => {
//     let success = false // Change this to true to simulate a successful operation;
//     success ? resolve("Data fetched successfully.") : reject("Something went wrong")
// })

// promise.then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Promise is settled.")
// })

const fetchData = new Promise((resolve, reject) => {
    let success = true // Change this to false to simulate a failed operation;
    console.log("Fetching data...");

    setTimeout(() => {
        success ? resolve("Data fetched successfully.") : reject("Something went wrong");
    }, 3000)
});

fetchData.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is settled.");
});


// const res = fetch("https://jsonplaceholder.typicode.com/posts")

// res.then((response) => {
//     return response
// }).then((data) => {
//     console.log(data); // Display the first 5 posts
// }).catch((error) => {
//     console.log("Error fetching data:", error);
// }).finally(() => {
//     console.log("Fetch operation completed.");
// });

//res.json() converts the JSON response into a JavaScript object . 

//Response returns JSON OBjects containg metadata about the response, such as status code, headers, etc. To access the actual data, you need to call the .json() method on the response object.