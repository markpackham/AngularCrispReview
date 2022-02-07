use crisps_review;
db.dropDatabase();

db.owners.insertMany([
  {
    owner : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
    owner_address : "5A Grange Rd, Houstoun Industrial Estate, Livingston, Scotland, EH54 5DE",
    owner_phone : "01506 443 383",
    owner_website : "https://www.nishaenterprises.co.uk/"
  },
  {
    owner : "Walkers Snacks Ltd",
    owner_address : "450 South Oak Way, Green Park, Reading RG2 6UW",
    owner_phone : "800 274 777",
    owner_website : "https://www.walkers.co.uk/"
  },
  {
    owner: "Kellogg Co.",
    owner_address: "Orange Tower Media City Uk, Salford, Greater Manchester, United Kingdom, M50 2HF",
    owner_phone: "0800 626066",
    owner_website: "https://www.kelloggs.co.uk/en_GB/home.html"
  },
  {
    owner: "KP Snacks Limited",
    owner_address: "Fifth Floor, The Urban Building, 3-9 Albert Street, Slough, SL1 2BE",
    owner_phone: "0800 917 4494",
    owner_website: "https://www.kpsnacks.com/"
  }
]);

db.brands.insertMany([
{
  brand : "Golden Cross",
  brand_owner : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
},
{
  brand : "Monster Munch",
  brand_owner : "Walkers Snacks Ltd",
},
{
  brand: "Pringles",
  brand_owner: "Kellogg Co."
}
]);

db.flavours.insertMany([
  {
    flavour : "Spicey",
  },
  {
    flavour : "Pickled Onion",
  }
]);