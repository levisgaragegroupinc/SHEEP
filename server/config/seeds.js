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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://i.ibb.co/8YPkZTT/Eight.jpg",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit Est lorem ipsum dolor sit amet consectetur. Nunc id cursus metus aliquam eleifend mi. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Pellentesque nec nam aliquam sem et tortor consequat. Rhoncus urna neque viverra justo nec. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Id nibh tortor id aliquet. Ipsum suspendisse ultrices gravida dictum fusce. Congue mauris rhoncus aenean vel elit. Risus quis varius quam quisque id. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare.",
      image: "https://i.ibb.co/p4VQ74B/Five.jpg",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Enim tortor at auctor urna nunc id cursus metus. Egestas integer eget aliquet nibh. Nibh mauris cursus mattis molestie a iaculis at. Pellentesque eu tincidunt tortor aliquam. Pretium aenean pharetra magna ac. Velit sed ullamcorper morbi tincidunt ornare massa. Purus sit amet volutpat consequat. In cursus turpis massa tincidunt dui. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor.",
      image: "https://i.ibb.co/BKjWfMC/Four.jpg",
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
      name: "Stem Cell Usage to Regrow Diseased Heart Tissue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Auctor augue mauris augue neque. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Nullam eget felis eget nunc. Malesuada proin libero nunc consequat interdum. Enim tortor at auctor urna nunc id cursus metus. Egestas integer eget aliquet nibh. Nibh mauris cursus mattis molestie a iaculis at. Pellentesque eu tincidunt tortor aliquam. Pretium aenean pharetra magna ac. Velit sed ullamcorper morbi tincidunt ornare massa. Purus sit amet volutpat consequat. In cursus turpis massa tincidunt dui. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor.",
      image: "https://i.ibb.co/wRxzn6n/Eleven.jpg",
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
      name: "T-Cells Effect on Cancer Cells",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Auctor augue mauris augue neque. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Nullam eget felis eget nunc. Malesuada proin libero nunc consequat interdum. Enim tortor at auctor urna nunc id cursus metus. Egestas integer eget aliquet nibh. Nibh mauris cursus mattis molestie a iaculis at. Pellentesque eu tincidunt tortor aliquam. Pretium aenean pharetra magna ac. Velit sed ullamcorper morbi tincidunt ornare massa. Purus sit amet volutpat consequat. In cursus turpis massa tincidunt dui. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor.",
      image: "https://i.ibb.co/jT8GkSj/Ten.jpg",
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
      name: "Fighting Covid with Plant Based Diets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Laoreet id donec ultrices tincidunt arcu non sodales. Volutpat maecenas volutpat blandit aliquam. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Tortor condimentum lacinia quis vel. Libero enim sed faucibus turpis in eu. Condimentum id venenatis a condimentum vitae sapien. In fermentum et sollicitudin ac orci phasellus egestas. Ornare suspendisse sed nisi lacus. Tincidunt eget nullam non nisi est sit. Quis hendrerit dolor magna eget est. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.",
      image: "https://i.ibb.co/kXx7S3W/Twelve.jpg",
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
      name: "Blood Optimization to Increase Immmune Health",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Dignissim sodales ut eu sem. Maecenas ultricies mi eget mauris. Senectus et netus et malesuada fames ac. Posuere morbi leo urna molestie at elementum eu. Morbi tincidunt augue interdum velit euismod in pellentesque. Aliquam ultrices sagittis orci a scelerisque purus semper. Diam phasellus vestibulum lorem sed risus. Non nisi est sit amet facilisis magna etiam tempor. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget nunc lobortis mattis aliquam faucibus. Ullamcorper a lacus vestibulum sed. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Auctor augue mauris augue neque gravida in fermentum. At elementum eu facilisis sed odio morbi quis commodo. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Consectetur lorem donec massa sapien faucibus.",
      image: "https://i.ibb.co/gy4VsKW/Nine.jpg",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit. Dignissim sodales ut eu sem. Maecenas ultricies mi eget mauris. Senectus et netus et malesuada fames ac. Posuere morbi leo urna molestie at elementum eu. Morbi tincidunt augue interdum velit euismod in pellentesque. Aliquam ultrices sagittis orci a scelerisque purus semper. Diam phasellus vestibulum lorem sed risus. Non nisi est sit amet facilisis magna etiam tempor. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget nunc lobortis mattis aliquam faucibus. Ullamcorper a lacus vestibulum sed. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Auctor augue mauris augue neque gravida in fermentum. At elementum eu facilisis sed odio morbi quis commodo. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Consectetur lorem donec massa sapien faucibus.",
      image: "https://i.ibb.co/YcgdwBY/Seven.jpg",
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
