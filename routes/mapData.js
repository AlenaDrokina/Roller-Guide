var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function (req, res, next) {
  db("SELECT * FROM data;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", async function (req, res) {
  // The request's body is available in req.body
  let { name, latitude, longitude } = req.body;
  // sql syntax is tested & correct
  console.log(req.body);
  let sql = `
    INSERT INTO data (name, latitude, longitude)
    VALUES ('${name}', ${latitude}, ${longitude});
    `; //1 are the fields and 2 these are the values
  //constructor of the sql
  try {
    await db(sql); //adds item
    let result = await db("SELECT * FROM data"); //get the list of items
    // let newItems = result.data;
    res.status(201).send(result.data); // send data to client
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/:markId", async (req, res) => {
  // URL params are available in req.params
  let markId = req.params.markId;
  try {
    // get item with id matching req params
    let result = await db(`SELECT * FROM data WHERE id = ${markId}`);
    // if this returns nothing, id doesn’t exist: throw an error
    if (result.data.length === 0) {
      res.status(404).send({ error: "item not found" });
    } else {
      // delete item with id matching req params
      await db(`DELETE FROM data WHERE id = ${markId}`);
      // save result to result variable
      result = await db(`SELECT * FROM data`);
      // send result data to client and return server status
      res.status(200).send(result.data);
    }
    // if try fails, catch with 500 error
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
