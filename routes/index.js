var express = require("express");
var router = express.Router();
const { ensureUserLoggedIn } = require("../middleware/guards");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/members-only", ensureUserLoggedIn, function (req, res) {
  res.send({ message: "Here is your Members Only content from the server..." });
});

module.exports = router;
