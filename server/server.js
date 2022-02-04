const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createOwnersRouter = require("./helpers/create_owners_router.js");
const createFlavoursRouter = require("./helpers/create_flavours_router.js");

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    let db = client.db("crisps_review");
    const ownersCollection = db.collection("owners");
    const ownersRouter = createOwnersRouter(ownersCollection);
    const flavoursCollection = db.collection("flavours");
    const flavoursRouter = createFlavoursRouter(flavoursCollection);
    app.use("/", ownersRouter);
    app.use("/", flavoursRouter);
  })

  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
