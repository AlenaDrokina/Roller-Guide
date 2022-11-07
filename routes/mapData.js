var express = require("express");
var router = express.Router();

router.get("/TheMap", function (req, res, next) {
  db("SELECT * FROM data;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/TheMap/id", function (req, res) {
  db("DELETE FROM data WHERE id ");
});

module.exports = router;
