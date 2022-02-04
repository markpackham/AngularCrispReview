const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createBrandsRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/brands", (req, res) => {
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
  router.get("/brands/:id", (req, res) => {
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
  router.post("/brands", (req, res) => {
    const newBrand = req.body;
    collection
      .insertOne(newBrand)
      .then((result) => {
        res.status(201).json(newBrand);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // DESTROY
  router.delete("/brands/delete/:id", (req, res) => {
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
  router.put("/brands/update/:id", (req, res) => {
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

module.exports = createBrandsRouter;
