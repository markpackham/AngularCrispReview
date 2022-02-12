const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createCrispsRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/crisps", async (req, res) => {
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
  router.get("/crisps/:id", async (req, res) => {
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
  router.post("/crisps", async (req, res) => {
    const newCrisp = req.body;
    if (
      newCrisp.crisp_name.length < 3 ||
      newCrisp.brand.length < 3 ||
      newCrisp.flavour.length < 3 ||
      newCrisp.weight.length < 1
    ) {
      res.status(422);
      res.json({ status: 422, error: "422 Unprocessable Entity" });
    } else {
      collection
        .insertOne(newCrisp)
        .then((result) => {
          res.status(201).json(newCrisp);
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    }
  });

  // DESTROY
  router.delete("/crisps/delete/:id", async (req, res) => {
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
  router.put("/crisps/update/:id", async (req, res) => {
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

module.exports = createCrispsRouter;
