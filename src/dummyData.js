const commerceData = [
  {
    id: 1,
    name: "Rustic Granite Bacon",
    price: 199,
  },
  {
    id: 2,
    name: "Handcrafted Soft Tuna",
    price: 299,
  },
  {
    id: 3,
    name: "Handcrafted Plastic Towels",
    price: 399,
  },
  {
    id: 4,
    name: "Licensed Plastic Car",
    price: 399,
  },
  {
    id: 5,
    name: "Rustic Metal Chicken",
    price: 599,
  },
  {
    id: 6,
    name: "Gorgeous Concrete Bacon",
    price: 599,
  },
  {
    id: 7,
    name: "Handcrafted Frozen Soap",
    price: 699,
  },
  {
    id: 8,
    name: "Small Soft Bike",
    price: 299,
  },
  {
    id: 9,
    name: "Awesome Cotton Mouse",
    price: 99,
  },
];

commerceData.sort((a, b) => a.price - b.price);

export default commerceData;
