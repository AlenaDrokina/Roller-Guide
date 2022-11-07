var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var authRouter = require("./routes/auth");
var indexRouter = require("./routes/index");
var skateMovesRouter = require("./routes/skateMoves");
var usersRouter = require("./routes/users");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", authRouter);
app.use("/users", usersRouter);

app.use("/", indexRouter);
app.use("/skateMoves", skateMovesRouter);

// app.use(function (req, res, next) {
//   next(createError(404));
// });

// General error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message });
});

module.exports = app;
