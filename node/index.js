const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("build"));

app.get("/msg", (req, res) => {
  res.json("Welcome to docker-compose volume");
});

app.listen(8080, () => {
  console.log("server is running on 8080");
});
