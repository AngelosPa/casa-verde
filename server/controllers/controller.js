// Controller functions come here
const { User } = require("../model/casaverdeModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../JWT-check");

const allControllers = {};

// Add new User
allControllers.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await new User({
      _id: mongoose.Types.ObjectId(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      admin: req.body.admin,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
      avatar: req.file.path,
    });

    await user.save();
    res.status(201).json({ message: "New user being added ✅", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// GET all users
allControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.message).json({ message: err.message });
  }
};

// Login
allControllers.login = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const user = await User.findOne({ username });

  if (user == null) {
    return res.status(404).json({ message: "Cannot find user" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = createToken(user);
      req.session.user = user;
      await res.json({
        auth: true,
        token,
        user: {
          password: user.password,
          username: user.username,
        },
      });
    } else {
      res.json({
        message: "Not Allowed, please check your username or password",
      });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};
allControllers.logout = async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.redirect("");
};
allControllers.getDate = async (req, res) => {
  res.status(200).json("welcome to casaVerde");
};
module.exports = allControllers;
