const userRouter = require("./routes/api/v1/user.routes.js");
const express = require("express");
const dbConnect = require("./utils/dbConnect.js");
const app = express();
require("dotenv").config();

app.use(express.json());

const port = 8080;

dbConnect();

app.use("/api/v1/user", userRouter);

app.get("/test", (req, res) => {
  res.json("i am test");
});
app.listen(port, () => {
  console.log("server running at", port);
});

module.exports = app;
