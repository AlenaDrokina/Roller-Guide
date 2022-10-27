var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM skateMoves;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/:id", async function (req, res, next) {
  let id = req.params.id;

  try {
    let result = await db(`SELECT * FROM skateMoves WHERE id = ${id}`);
    if (result.data.length === 0) {
      res.status(404).send({ error: "Move not found" });
    } else {
      res.send(result.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
