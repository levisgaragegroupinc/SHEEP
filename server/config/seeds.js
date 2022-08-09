const db = require("./connection");
const { User, Order, Product, Project, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Blood", projects: [] },
    { name: "Cancer", projects: [] },
    { name: "Cardiovascular", projects: [] },
    { name: "Congenital disorders", projects: [] },
    { name: "Ear", projects: [] },
    { name: "Eye", projects: [] },
    { name: "Infection", projects: [] },
    { name: "Reproductive", projects: [] },
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
      image: "fas fa-heart",
      product: [
        product[0]._id,
        product[1]._id,
        product[2]._id,
        product[3]._id,
        product[4]._id,
        product[5]._id,
        product[6]._id,
      ],
      category: categories[0]._id,
    },
    {
      name: "Antibiotics for Vancomycin Staphylococcus Aureus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fas fa-heart",
      product: [
        product[0]._id,
        product[1]._id,
        product[2]._id,
        product[3]._id,
        product[4]._id,
        product[5]._id,
        product[6]._id,
      ],
      category: categories[0]._id,
    },
    {
      name: "Optimizing E-coli for Insulin Production",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fas fa-heart",
      product: [
        product[0]._id,
        product[1]._id,
        product[2]._id,
        product[3]._id,
        product[4]._id,
        product[5]._id,
        product[6]._id,
      ],
      category: categories[0]._id,
    },
    {
      name: "Use of Bacteriophages to Eliminate Pathogens",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit.",
      image: "fas fa-heart",
      product: [
        product[0]._id,
        product[1]._id,
        product[2]._id,
        product[3]._id,
        product[4]._id,
        product[5]._id,
        product[6]._id,
      ],
      category: categories[0]._id,
    },
  ]);

  console.log("projects seeded!");

  // Link categories and projects
  let num = 0;
  for (newProject of projects) {
    const tempCategory = categories[num];
    tempCategory.projects.push(newProject._id);
    await tempCategory.save();
    num += 1;
  }

  await Order.deleteMany();

  const order = await Order.create([
    {
      purchaseDate: "08-06-2022",
      product: product[0]._id,
      project: projects[0]._id,
    },
    {
      purchaseDate: "08-07-2022",
      product: product[0]._id,
      project: projects[0]._id,
    },
    {
      purchaseDate: "08-08-2022",
      product: product[0]._id,
      project: projects[0]._id,
    },
  ]);

  console.log("order seeded!");

  await User.deleteMany();

  // Josh
  await User.create({
    firstName: "Josh",
    lastName: "Brolin",
    email: "brolin@testmail.com",
    password: "password12345",
    orders: [order[0]._id],
    dollarsDonated: 4200,
    projectsFunded: [projects[0]._id],
  });

  // Natasha
  await User.create({
    firstName: "Natasha",
    lastName: "Romanof",
    email: "natasha@testmail.com",
    password: "password12345",
    orders: [order[1]._id],
    dollarsDonated: 4200,
    projectsFunded: [projects[0]._id, projects[1]._id],
  });

  // Chris
  await User.create({
    firstName: "Chris",
    lastName: "Hemsworth",
    email: "hemsworth@testmail.com",
    password: "password12345",
  });

  console.log("user seeded");

  process.exit();
});
