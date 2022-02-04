const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createCrispsRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/crisps", (req, res) => {
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
  router.get("/crisps/:id", (req, res) => {
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
  router.post("/crisps", (req, res) => {
    const newCrisp = req.body;
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
  });

  // DESTROY
  router.delete("/crisps/delete/:id", (req, res) => {
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
  router.put("/crisps/update/:id", (req, res) => {
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
