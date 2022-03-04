const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createBrandsRouter = function (collection) {
  const apiName = "/brands";
  const router = express.Router();

  router.get(`${apiName}`, async (req, res) => {
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

  router.post(`${this.apiName}`, async (req, res) => {
    const newBrand = req.body;
    if (newBrand.brand_name.length < 3 || newBrand.brand_owner.length < 3) {
      res.status(422);
      res.json({ status: 422, error: "422 Unprocessable Entity" });
    } else {
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
    }
  });

  router.delete(`${this.apiName}/delete/:id`, async (req, res) => {
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

  router.put(`${this.apiName}/update/:id`, async (req, res) => {
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
