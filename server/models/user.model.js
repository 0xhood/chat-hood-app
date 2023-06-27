const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default: 'https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", chatModel);

module.exports.User = User;
