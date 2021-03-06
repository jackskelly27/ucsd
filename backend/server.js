const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/activities", require("./routes/activityRoutes"));
app.use("/api/resources", require("./routes/resourceRoutes"));
app.use("/api/gyms", require("./routes/gymRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));