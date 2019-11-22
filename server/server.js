const http = require("http");
const fs = require("fs");

const color = '';

http.createServer((req, res) => {

  this.color = req.url.replace("/", "");

  if (this.color) {
    fs.writeFile("color.txt", this.color, function (err) {
      if (err) throw err;
    });
  }

  fs.readFile("color.txt", function (err, data) {
    res.write(data);
    res.end();
  });

}).listen(4001);