const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createOwnersRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/owners", (req, res) => {
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
  router.get("/owners/:id", (req, res) => {
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
  // What Json file looks like
  //   {
  //     "owner": "Walkers Snacks Ltd",
  //     "owner_address": "450 South Oak Way, Green Park, Reading RG2 6UW",
  //     "owner_phone": "800 274 777",
  //     "owner_website": "https://www.walkers.co.uk/"
  //    }
  router.post("/owners", (req, res) => {
    const newOwner = req.body;
    if (newOwner.owner.length > 4 && newOwner.owner_address.length > 5) {
    }

    collection
      .insertOne(newOwner)
      .then((result) => {
        res.status(201).json(newOwner);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // DESTROY
  router.delete("/owners/delete/:id", (req, res) => {
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
  router.put("/owners/update/:id", (req, res) => {
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

module.exports = createOwnersRouter;
