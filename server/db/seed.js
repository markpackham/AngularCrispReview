use "crisps_review";
db.dropDatabase();

db.owners.insertMany([{
    "owner" : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
    "owner_address" : "5A Grange Rd, Houstoun Industrial Estate, Livingston, Scotland, EH54 5DE",
    "owner_phone" : "+44 01506 443 383",
    "owner_website" : "https://www.nishaenterprises.co.uk/"
  },
  {
    "owner" : "Walkers Snacks Ltd",
    "owner_address" : "450 South Oak Way, Green Park, Reading RG2 6UW",
    "owner_phone" : "800 274 777",
    "owner_website" : "https://www.walkers.co.uk/"
  }
]);

db.brands.insertMany([{
  "brand" : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
  "brand_owner" : "Golden Cross",
},
{
  "brand" : "Monster Munch",
  "brand_owner" : "Walkers Snacks Ltd",
}
]);