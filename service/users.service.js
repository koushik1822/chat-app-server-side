const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
module.exports.userService = async (email, password, res) => {
  const createdUser = await userModel.create({ email, password });
  jwt.sign({ userId: createdUser._id }, process.env.JWT_TOKEN, (err, token) => {
    console.log(token);
    if (err) throw err;
    res.cookie("token", token).status(201).json("ok");
  });
};
