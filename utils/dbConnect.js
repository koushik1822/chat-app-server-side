const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.MONGO_URL;
const dbConnect = () => {
  mongoose
    .connect(db)
    .then(() => console.log("💻 Mondodb Connected"))
    .catch((err) => console.error(err));
};
module.exports = dbConnect;
