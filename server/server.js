const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createBrandsRouter = require("./helpers/create_brands_router.js");
const createFlavoursRouter = require("./helpers/create_flavours_router.js");
const createOwnersRouter = require("./helpers/create_owners_router.js");

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    let db = client.db("crisps_review");
    const brandsCollection = db.collection("brands");
    const brandsRouter = createBrandsRouter(brandsCollection);
    const flavoursCollection = db.collection("flavours");
    const flavoursRouter = createFlavoursRouter(flavoursCollection);
    const ownersCollection = db.collection("owners");
    const ownersRouter = createOwnersRouter(ownersCollection);
    app.use("/", brandsRouter);
    app.use("/", flavoursRouter);
    app.use("/", ownersRouter);
  })

  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
