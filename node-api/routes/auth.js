const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// -----------------------------------------Signup-------------------------------------------

router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      password,
      firstname,
      lastname,
      address,
      state,
      mobileno,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstname,
      lastname,
      address,
      state,
      mobileno,
      username,
      password: hashedPassword,
    });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//------------------------------------- Login ------------------------------------------

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
