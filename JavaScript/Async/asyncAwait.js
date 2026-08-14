// const promise = new Promise((resolve, reject) => {
//     let success = true// Change this to true to simulate a successful operation;
//     console.log("Fetching data...");
//     if (success) {
//         setTimeout(() => {
//             resolve("Data fetched successfully.");
//         }, 4000);
//     } else {
//         reject("Something went wrong");
//     }
// });

// const fetchData = async () => {
//     try {
//         const response = await promise;
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         console.log("Promise is settled.");
//     }
// }

// fetchData();


const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.slice(0, 5)); // Display the first 5 posts
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


fetchData();
