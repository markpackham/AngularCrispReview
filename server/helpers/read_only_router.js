const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const readOnlyRouter = function (apiName, collection) {
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

  return router;
};

module.exports = readOnlyRouter;
