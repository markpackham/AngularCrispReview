use crisps_review;
db.dropDatabase();

db.owners.insertMany([
  {
    owner_name : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
    owner_address : "5A Grange Rd, Houstoun Industrial Estate, Livingston, Scotland, EH54 5DE",
    owner_phone : "01506 443 383",
    owner_website : "https://www.nishaenterprises.co.uk/"
  },
  {
    owner_name : "Walkers Snacks Ltd",
    owner_address : "450 South Oak Way, Green Park, Reading RG2 6UW",
    owner_phone : "800 274 777",
    owner_website : "https://www.walkers.co.uk/"
  },
  {
    owner_name: "Kellogg Co.",
    owner_address : "Orange Tower Media City Uk, Salford, Greater Manchester, United Kingdom, M50 2HF",
    owner_phone : "0800 626066",
    owner_website : "https://www.kelloggs.co.uk/en_GB/home.html"
  },
  {
    owner_name : "KP Snacks Limited",
    owner_address : "Fifth Floor, The Urban Building, 3-9 Albert Street, Slough, SL1 2BE",
    owner_phone : "0800 917 4494",
    owner_website : "https://www.kpsnacks.com/"
  }
]);

db.brands.insertMany([
{
  brand_name : "Golden Cross",
  brand_owner : "Nisha Enterprises incorporating Golden Cross Snacks and Millar Confectionary",
},
{
  brand_name : "Monster Munch",
  brand_owner : "Walkers Snacks Ltd",
},
{
  brand_name : "Pringles",
  brand_owner: "Kellogg Co."
}
]);

db.flavours.insertMany([
  {
    flavour_name : "Spicey",
  },
  {
    flavour_name : "Pickled Onion",
  }
]);

db.crisps.insertMany([
  {
    crisp_name : "Walkers Monster Munch Mega Pickled Onion Snack",
    crisp_image: "https://digitalcontent.api.tesco.com/v2/media/ghs/71136d56-96c4-4598-92a9-933efc472b4c/a9afb0dd-1305-4ed7-af82-ee0e8316ea37_364765077.jpeg",
    flavour_name : "Pickled Onion",
    brand_name : "Monster Munch",
    weight: "40",
    review: "Amazing strong if polarizing taste, lots of pickle but little onion flavour",
    review_score : "4"
  }
]);