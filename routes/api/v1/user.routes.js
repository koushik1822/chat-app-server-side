const express = require("express");
const { default: app } = require("../../../app");
const {
  registerUser,
  loggedInUser,
  loginUser,
} = require("../../../controller/users.controller");
const userRouter = express.Router();
userRouter.route("/register").post((req, res) => {
  registerUser(req, res);
});
userRouter.route("/profile").get((req, res) => {
  loggedInUser(req, res);
});
userRouter.route("/login").post((req, res) => {
  loginUser(req, res);
});
module.exports = userRouter;
