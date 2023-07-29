const http = require("http");
const fs = require("fs");
const p = require("path");
const uc = require("upper-case");

http
  .createServer(function (req, res) {
    fs.readfile("list.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);

// // console.log(p.extname("C:/Users?astiAd/Desktop/fruit_store.js"));

// console.log(uc.upperCase("daiben"));
