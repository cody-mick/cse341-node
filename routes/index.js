const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Cody Mickelsen");
});

routes.use("/contacts", require("./contacts"));

module.exports = routes;
