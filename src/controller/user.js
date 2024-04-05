const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const register = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.userName)
    return res.status(400).json({
      message: "Incomplete details, Please enter Email,username, and password!",
    });
  let { email, userName, password } = req.body;
  const checkUser = await User.find({ email });
  if (!checkUser.length == 0)
    return res
      .status(400)
      .json({ message: "The email is already registered with us!." });
  let hashPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, userName, password: hashPassword });
  await user.save();
  const token = jwt.sign({ _id: user._id }, "mySecretKey");
  return res
    .status(200)
    .json({
      message: `Hi ${userName}, Your profile is registered with us`,
      token,
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  if (user.length == 0)
    return res.status(404).json({ message: "User Not found" });
  const passwordCheck = await bcrypt.compare(password, user[0].password);
  if (!passwordCheck)
    return res.status(401).json({ message: "Invalid username or password." });
  const token = jwt.sign({ _id: user._id }, "mySecretKey");
  return res.status(200).json({ message: user, token });
};

const editProfile = async (req, res) => {
  const _id = req.user._id;
  updateProfile = req.body;
  const user = await User.findOneAndUpdate({ _id }, updateProfile, {
    new: true,
  });
  return res.status(200).json({ message: user });
};

const logout = async (req, res) => {
  return res
    .status(200)
    .clearCookie("jwtToken")
    .json({ message: "logout successfully!" });
};

const cartItems = async (req, res) => {
  const _id = req.user._id;
  const cartItems = await User.find({ _id }, { cart: 1 });
  return res.status(200).json({ message: cartItems });
};



const addToCart = async (req, res) => {
  const userId = req.user._id;
  const productId = req.body._id.$oid;
  const product = req.body;
  let newData;
  try {
    const user = await User.findOne({ _id: userId, 'cart.product._id.$oid': productId });
    if (user) {
      newData = await User.findOneAndUpdate(
        { _id: userId, 'cart.product._id.$oid': productId },
        { $inc: { 'cart.$.quantity': 1 } },
        {new:true}
      );
    } else {
      newData = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { cart: { product, quantity: 1 } } },
        {new:true}
      );
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  return res.status(200).json({message:newData})
};



module.exports = { register, login, editProfile, logout, cartItems, addToCart };
