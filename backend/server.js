const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { spawn } = require("child_process");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
const authRoutes = require("./routes/auth");
const propertyRoutes = require("./routes/properties");
const recommendationRoutes = require("./routes/recommendations");

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);

app.use("/api/recommendations", (req, res) => {
  const userId = req.query.userId;

  const pythonProcess = spawn("python3", [
    "./recommendation_engine.py",
    userId,
  ]);

  pythonProcess.stdout.on("data", (data) => {
    const recommendations = JSON.parse(data.toString());
    res.status(200).json(recommendations);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).send("Error in recommendation engine");
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
