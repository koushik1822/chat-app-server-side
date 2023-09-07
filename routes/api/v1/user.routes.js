const express = require("express");
const { default: app } = require("../../../app");
const { registerUser } = require("../../../controller/users.controller");
const userRouter = express.Router();
userRouter.route("/register").get((req, res) => {
  registerUser;
});
module.exports = userRouter;
