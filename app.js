const userRouter = require("./routes/api/v1/user.routes.js");
const cors = require("cors");
const express = require("express");
const dbConnect = require("./utils/dbConnect.js");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
require("dotenv").config();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

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
