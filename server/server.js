const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createOwnersRouter = require("./helpers/create_owners_router.js");

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("crisps_review");
    const ownersCollection = db.collection("owners");
    const ownersRouter = createOwnersRouter(ownersCollection);
    app.use("/", ownersRouter);
  })

  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
