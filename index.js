const express = require("express");
const app = express();

const mainRoute = require('./route/router');

const ejs = require("ejs");
app.set("view engine", "ejs");


app.listen(8080, () => {
  console.log("Server is running on port 8080 ");
});

app.use(mainRoute);
