//import express js framework
const express = require("express");
// create a  backend - application
const app = express();

// create a variable

const port = 3000;

//  create a routes
app.get("/", (req, res) => {
  res.send(` <h1> Hello Ranjeet jee </h1>`);
});

app.post("/car", (req, res) => {
  res.send("Received a post request");
});

// adding middleware
app.use(express.json());

// activated port
app.listen(port, () => {
  console.log(`This port is activated ${port}`);
});
