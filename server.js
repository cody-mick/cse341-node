const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./db/connect");
const cors = require("cors");

// configure body parser
let bodyParser = require("body-parser");
app.use(bodyParser.json()).use(cors());

connect.initDatabase();

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
