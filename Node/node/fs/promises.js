const fs = require('fs/promises')

// const writeFile = async () => {
//     try {
//         await fs.writeFile('hello.txt', 'Hello Node.js');
//         console.log('File saved!');
//     } catch (err) { 
//         throw err;
//     }
// };

// writeFile();

// const readUsers = async () => {
//     try {
//         const data = await fs.readFile('users.json', 'utf-8');
//         const users = JSON.parse(data);
//         console.log(users);
//     } catch(err) {
//         console.error(err);
//     }
// }

// readUsers();

const addUsers = async () => {
    const user = {
        id: 3,
        name: 'Raj',
    }
    try {
        const data = await fs.readFile('users.json', 'utf-8');
        const users = JSON.parse(data); //parse json data into javascript object
        const isExist = users.find(u => u.id === user.id);
        if (isExist) {
            console.log("User already exists");
            return;
        }
        users.push(user);
        await fs.writeFile('users.json', JSON.stringify(users, null, 2));
        console.log('User added successfully');
    } catch(err) {
        console.error(err);
    }
}

addUsers();