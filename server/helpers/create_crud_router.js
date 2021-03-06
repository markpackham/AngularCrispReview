const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createCrudRouter = function (apiName, collection) {
  const router = express.Router();

  router.get(apiName, async (req, res) => {
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

  router.get(`${apiName}/:id`, async (req, res) => {
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

  router.post(`${apiName}`, async (req, res) => {
    const newItem = req.body;
    if (newItem == null) {
      res.status(422);
      res.json({ status: 422, error: "422 Unprocessable Entity" });
    } else {
      collection
        .insertOne(newItem)
        .then((result) => {
          res.status(201).json(newItem);
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
    }
  });

  router.delete(`${apiName}/delete/:id`, async (req, res) => {
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

  router.put(`${apiName}/update/:id`, async (req, res) => {
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

module.exports = createCrudRouter;
