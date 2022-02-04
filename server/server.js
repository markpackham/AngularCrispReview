const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

// Helpers
const createBrandsRouter = require("./helpers/create_brands_router.js");
const createCrispsRouter = require("./helpers/create_crisps_router.js");
const createFlavoursRouter = require("./helpers/create_flavours_router.js");
const createOwnersRouter = require("./helpers/create_owners_router.js");

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    // Database selected
    let db = client.db("crisps_review");

    // Database collections selected
    const brandsCollection = db.collection("brands");
    const brandsRouter = createBrandsRouter(brandsCollection);
    const crispsCollection = db.collection("crisps");
    const crispsRouter = createCrispsRouter(crispsCollection);
    const flavoursCollection = db.collection("flavours");
    const flavoursRouter = createFlavoursRouter(flavoursCollection);
    const ownersCollection = db.collection("owners");
    const ownersRouter = createOwnersRouter(ownersCollection);

    // Route paths
    // eg http://localhost:3000/brands
    app.use("/", brandsRouter);
    app.use("/", crispsRouter);
    app.use("/", flavoursRouter);
    app.use("/", ownersRouter);
  })

  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
