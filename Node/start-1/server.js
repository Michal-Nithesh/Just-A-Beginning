const { createServer } = require("http");

createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/html" });
    console.log("Request Details", req);
    res.end(`
        <!DOCTYPE html>
            <html>
                <head>
                    <h1>Starting a New Server</h1>
                </head>
                <body>
                    <h1>Serving HTML Text</h1>
                    <p>${req.method} requset made for ${req.url}</p>
                </body>
            </html>
`);
}).listen(3000);

console.log("Web server is listening on port 3000");