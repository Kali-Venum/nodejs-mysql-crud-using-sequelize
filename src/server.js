const express = require("express");
const cors = require("cors");
const { corsOptions } = require("./config/cors.config");

// routes.
const authRoutes = require("./routes/auth.routes");

const app = express();

// Setting up the corse.
app.use(cors(corsOptions));

// Settingup the body parser & the URL encoder.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The server is running on:- http://localhost:${port}`);
});
