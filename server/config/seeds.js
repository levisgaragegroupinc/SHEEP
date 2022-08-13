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
        "Approximately 80% of chronic and recurrent microbial infections in the human body are due to bacterial biofilm. Microbial cells within biofilms have shown 10–1000 times more antibiotics resistance than the planktonic cells [79]. Biofilm is formed in diverse environmental niches, including freshwater rivers, rocks, deep-sea vents and hydrothermal hot springs. Biofilm-related infections can be broadly divided into two types.",
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
        "Vancomycin is considered a drug of last resort for severe MRSA and other resistant Gram-positive infections. Vancomycin enjoyed a high level of success for decades following MRSA outbreaks until recent reports of increasing S. aureus MICs culminating in high-level vancomycin-resistant S. aureus (VRSA), first reported in 2002. Since then, there have been selected case reports of VRSA disease in the US and other countries.",
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
        "The rapid increase in the number of diabetic patients globally and exploration of alternate insulin delivery methods such as inhalation or oral route that rely on higher doses, is bound to escalate the demand for recombinant insulin in near future. Current manufacturing technologies would be unable to meet the growing demand of affordable insulin due to limitation in production capacity and high production cost.",
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
      name: "Stem Cell Usage to Regrow Heart Tissue",
      description:
        "Cell and gene therapies offer hope to millions of people living with genetic and some degenerative diseases. These new treatment options are a paradigm shift. They don’t just treat symptoms. They help the body repair itself from within. Researchers have uncovered stem cell-activated mechanisms of healing after a heart attack. Stem cells restored cardiac muscle back to its condition before the heart attack, in turn providing a blueprint of how stem cells may work.",
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
        "T cells play a vital role in pathogen elimination and tumor immunosurveillance. The human body is capable of producing an array of specialized T cells that provide unique responses to the diverse spectrum of tumor cells and pathogens (viruses, bacteria and parasites) that are capable of penetrating host defenses. The modulation of T cells is an exciting prospect for the development of novel therapies for immuno-oncology –autoimmune applications, adoptive cell therapy and vaccine development.",
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
        "Plant-based and/or fish (pescatarian) diets may help lower the odds of developing moderate to severe COVID-19 infection, suggest the findings of a six-country study. Several studies have suggested that diet might have an important role in symptom severity and illness duration of COVID-19 infection. But, as yet, there’s little evidence to confirm or refute this theory.",
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
        "Bacteriophages (BPs) are viruses that can infect and kill bacteria without any negative effect on human or animal cells. For this reason, it is supposed that they can be used, alone or in combination with antibiotics, to treat bacterial infections. Administration of BPs for this purpose dates to about a century ago, mainly based on the studies of a French researcher, Felix d’Herelle. Due to his collaboration with his Georgian colleagues, BP therapy was largely used in the Soviet Union in patients of any age suffering from a wide range of diseases. The results were considered very satisfactory and were published in several reports.",
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
