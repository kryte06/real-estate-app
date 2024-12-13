const express = require("express");
const jwt = require("jsonwebtoken");
const Property = require("../models/Property");
const User = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const user = await User.findById(decoded.id);
    const recommendations = await Property.find({
      tags: { $in: user.preferences },
    });
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
