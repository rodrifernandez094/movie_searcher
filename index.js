const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv").config({
  path: `${__dirname}/config/config.env`,
});
const moviesRoutes = require("./routes/moviesRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

//dev log
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("short"));
}

//error log middleware
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: error.message });
});

app.use(moviesRoutes);

app.use((req, res) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  console.log(error);
  res.status(404).json(error.message);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
