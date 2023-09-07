const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;
app.get("/test", (req, res) => {
  res.json("i am test");
});
app.listen(port, () => {
  console.log("server running at", port);
});