use "crisps_review";
db.dropDatabase();

db.brands.insertMany([{
    "brand" : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
    "brand_owner" : "Golden Cross",
  },
  {
    "brand" : "Monster Munch",
    "brand_owner" : "Walkers Snacks Ltd",
  }
]);