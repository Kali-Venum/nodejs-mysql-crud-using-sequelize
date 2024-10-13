const express = require("express");
const postRoutes = require("./routes/post.routes");

const app = express();

// middlewares.
app.use("/posts", postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
