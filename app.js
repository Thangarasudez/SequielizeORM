const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(5000, () => {
  console.log(`App will run on : http://localhost:5000`);
});
