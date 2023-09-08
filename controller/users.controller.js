const userModel = require("../model/userModel");
const { userService, loggedInService } = require("../service/users.service");

module.exports.registerUser = (req, res, next) => {
  // console.log(req);
  const { email, password } = req.body;
  userService(email, password, res);
};

module.exports.loggedInUser = (req, res, next) => {
  loggedInService(req, res);
};
