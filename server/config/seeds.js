const db = require("./connection");
const { User, Order, Product, Project, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Blood" },
    { name: "Cancer" },
    { name: "Cardiovascular" },
    { name: "Congenital disorders" },
    { name: "Ear" },
    { name: "Eye" },
    { name: "Infection" },
    { name: "Reproductive" },
  ]);

  console.log("categories seeded!");

  await Product.deleteMany();

  const product = await Product.insertMany([
    { name: "Friend", price: 20 },
    { name: "Supporter", price: 80 },
    { name: "Champion", price: 200 },
    { name: "Advocate", price: 400 },
    { name: "Ally", price: 1200 },
    { name: "Defender", price: 2400 },
    { name: "Benefactor", price: 5000 },
  ]);

  console.log("products seeded!");

  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: "Biofilm Research for Microbial Resistant Organisms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fa-solid fa-heart",
      products: product[0]._id,
      category: categories[0]._id,
    },
    {
      name: "Antibiotics for Vancomycin Staphylococcus Aureus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fa-solid fa-heart",
      products: product[0]._id,
      category: categories[0]._id,
    },
    {
      name: "Optimizing E-coli for Insulin Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fa-solid fa-heart",
      products: product[0]._id,
      category: categories[0]._id,
    },
    {
      name: "Use of Bacteriophages to Eliminate Pathogens",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fa-solid fa-heart",
      products: product[0]._id,
      category: categories[0]._id,
    },
  ]);

  console.log("projects seeded!");

  await User.deleteMany();

  //   await User.create({
  //     firstName: "Josh",
  //     lastName: "Brolin",
  //     email: "brolin@testmail.com",
  //     password: "password12345",
  //     orders: [
  //       {
  //         product: product[0]._id,
  //         project: project[0]._id,
  //       },
  //     ],
  //     dollarsDonated: 4200,
  //     projectsFunded: [{ project: project[0]._id }],
  //   });

  await User.create({
    firstName: "Chris",
    lastName: "Hemsworth",
    email: "hemsworth@testmail.com",
    password: "password12345",
  });

  console.log("user seeded");

  process.exit();
});
