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

  // SHOW
  // example http://localhost:3000/flavours/61fc0c47e2f0ce561a75a22e
  router.get("/flavours/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // CREATE
  router.post("/flavours", (req, res) => {
    const newFlavour = req.body;
    if (newFlavour.flavour.length < 3) {
      res.status(422);
      res.json({ status: 422, error: "422 Unprocessable Entity" });
    }

    collection
      .insertOne(newFlavour)
      .then((result) => {
        res.status(201).json(newFlavour);
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

  // UPDATE (PUT)
  // http://localhost:3000/flavours/update/61fd20f5d74ea401912cf911
  router.put("/flavours/update/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
      .findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: updatedData },
        { returnOriginal: false }
      )
      .then((result) => {
        res.json(updatedData);
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
