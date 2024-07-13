const { createServer } = require("http");
const data = require("./cats.json");
// both are do the same things
// import http from "http"; 
// for import the modules you need to add the package.json "type":"module"


createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    if(req.url.toLowerCase() === "/biscuit")  {
        let biscuit = data.filter(
            (cat) => cat.name === "Biscuit");
        res.end(JSON.stringify(biscuit));
    } else if(req.url.toLowerCase() === "/jungle") {
        let jungle = data.filter(
            (cat) => cat.name === "Jungle");
        res.end(JSON.stringify(jungle));
    } else if (req.url.toLowerCase() === "/naimeriya") {
        let naimeriya = data.filter(
            (cat) => cat.name === "Naimeriya");
        res.end(JSON.stringify(naimeriya));
    } else {
        res.end(JSON.stringify(data));
    }
}).listen(3000);

console.log("Web server at 3000");