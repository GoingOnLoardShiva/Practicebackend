const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  Title: {
    type: String,
  },
  description: {
    type: String,
  },
  File: {
    type: String,
  },
  postdate: {

    type: Date,
    default: Date.now,
  },
  Aurthor: {
    type: String,
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
