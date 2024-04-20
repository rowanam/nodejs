// import Express and required modules
const express = require("express");

// create Express app
const app = express();

// handle GET requests
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// start a server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});