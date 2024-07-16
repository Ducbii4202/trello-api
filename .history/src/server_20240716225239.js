const express = require("express");

const app = express();
const hostname = "http://localhost";
const port = 8085;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, hostname, () => {
  console.log(`hello DucBii, I'm Running server at ${hostname}:${port}`);
});
