const express = require("express");
const { default: app } = require("../../../app");
const { registerUser } = require("../../../controller/users.controller");
const userRouter = express.Router();
userRouter.route("/register").post((req, res) => {
  registerUser(req, res);
});
module.exports = userRouter;
