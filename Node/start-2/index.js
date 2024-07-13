const { createServer } = require("http");
const { createReadStream } = require("fs");

const sendFile = (res, status, type, file) => {
    res.writeHead(status, { "content-Type": type });
    createReadStream(file).pipe(res)
}

createServer((req, res) => {
    switch(req.url){
        case "/":
            return sendFile(
                res,
                200,
                "text/html",
                "./home-page.html"
            );
        case "./lake.jpg":
            return sendFile(
                res,
                200,
                "image/jpg",
                "./lake.jpg"
            );
            case "/styles.css":
                return sendFile(
                    res,
                    200,
                    "text/css",
                    "./styles.css"
                );
            default:
                return sendFile(
                    res,
                    404,
                    "text/html",
                    "./404.html"
                );
    }
}).listen(3000);

console.log("Web server at 3000");