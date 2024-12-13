const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
