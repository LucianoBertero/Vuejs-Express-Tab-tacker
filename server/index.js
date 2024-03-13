console.log("hello");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  res.send({
    messge: `Hello ${req.body.email}! you user war a register`,
  });
});

app.get("/register", (req, res) => {
  console.log("entro");
  res.send({
    messge: `Hello`,
  });
});

app.get("/status", (req, res) => {
  res.send({ message: "hello Word" });
});

app.listen(process.env.PORT || 8081);
