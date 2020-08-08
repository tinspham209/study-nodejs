const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 8000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(`
    <h1> Hello world </h1>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
