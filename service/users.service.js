const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports.userService = async (email, password, res) => {
  console.log(email, password);
  try {
    if (email != "undefined" && password != "undefined") {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) throw err;
        const createdUser = await userModel.create({ email, password: hash });
        console.log(createdUser);
        jwt.sign(
          { userId: createdUser._id, email: email },
          process.env.JWT_TOKEN,
          (err, token) => {
            console.log(token);
            if (err) throw err;
            res
              .cookie("token", token)
              .status(201)
              .json({
                email,
                id: createdUser._id,
              })
              .send("success");
          }
        );
      });
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
module.exports.loggedInService = (req, res) => {
  const { token } = req?.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_TOKEN, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("token not found");
  }
};
module.exports.loginUserService = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await userModel.findOne({ email });
  if (foundUser) {
    const passMatched = bcrypt.compareSync(password, foundUser.password);
    console.log(passMatched);
    if (passMatched) {
      jwt.sign(
        { email: foundUser.email },
        process.env.JWT_TOKEN,
        (err, token) => {
          console.log(token);
          if (err) throw err;
          res
            .cookie("token", token)
            .status(201)
            .json({
              email,
              id: foundUser._id.toString(),
            })
            .send("success");
        }
      );
    }
  }
};
