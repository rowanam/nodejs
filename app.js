// import Express and required modules
const express = require("express");
const path = require("path");

// create Express app
const app = express();

// render a static file from public folder
app.use(express.static(path.join(__dirname, "/public")));

// start a server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});