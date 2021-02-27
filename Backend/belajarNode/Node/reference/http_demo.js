const http = require("http");

// Create server object
http.createServer((req, res) => {
    // Write response
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World");
    res.end();
}).listen(5000, () => console.log("Server running..."));
