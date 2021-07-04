const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type: ": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(4000, () => {
    console.log("4000번 포트에서 서버 대기중입니다.");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type: ": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(4001, () => {
    console.log("4001번 포트에서 서버 대기중입니다.");
  });
