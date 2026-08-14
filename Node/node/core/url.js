const {URL} = require('url')

const url = new URL("https://example.com:8080/products?id=10&name=phone")

console.log(url.searchParams.get("id"));
const hostname = url.hostname;
const port = url.port;
const protocol = url.protocol;
const pathname = url.pathname;
console.log(protocol);
// url.searchParams.delete("id");

// console.log(url.searchParams);

// const obj = Object.fromEntries(url.searchParams);
// const jsonObj = JSON.stringify(obj);
// const obj2 = JSON.parse(jsonObj);
// console.log(obj2);


url.password = 'haddehdr4rf4yfv';
console.log(url);