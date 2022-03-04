const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const helmet = require("helmet");
app.use(helmet());

const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

// Helpers
const createCrudRouter = require("./helpers/create_crud_router.js");

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    // Database selected
    let db = client.db("crisps_review");

    // Database collections selected
    const brandsCollection = db.collection("brands");
    const brandsRouter = createCrudRouter("/brands", brandsCollection);
    const crispsCollection = db.collection("crisps");
    const crispsRouter = createCrudRouter("/crisps", crispsCollection);
    const flavoursCollection = db.collection("flavours");
    const flavoursRouter = createCrudRouter("/flavours", flavoursCollection);
    const ownersCollection = db.collection("owners");
    const ownersRouter = createCrudRouter("/owners", ownersCollection);

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
