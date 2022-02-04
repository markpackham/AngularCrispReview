const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createFlavoursRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/flavours", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // CREATE
  router.post("/flavours", (req, res) => {
    const newFlavour = req.body;
    collection
      .insertOne(newFlavour)
      .then((result) => {
        res.json(result.ops[0]);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // DESTROY
  // eg http://localhost:3000/flavours/delete/61fce10040ec2af53a9cd2d7
  router.delete("/flavours/delete/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createFlavoursRouter;
