const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Project, Order, Product } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    // tested works
    categories: async () => {
      return await Category.find();
    },
    projects: async () => {
      return await Project.find();
    },
    // tested works
    category: async (parent, { _id }) => {
      return await (await Category.findOne({ _id })).populate("projects");
    },
    //tested works
    project: async (parent, { _id }) => {
      return await (await Project.findOne({ _id })).populate("product");
    },
    //tested works
    product: async (parent, { _id }) => {
      return await Product.findOne({ _id });
    },
    //tested works
    users: async (parent, args, context) => {
      return await User.find();
    },
    //tested works
    user: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findOne({
          _id: context.user._id,
        }).populate({
          path: "orders.product",
          // populate: { path: "product" },
        });
        console.log("User is", user);
        console.log(user.orders[0]);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ product: args.product });
      const line_items = [];

      const { product } = await order.populate("product");

      for (let i = 0; i < product.length; i++) {
        const productName = await stripe.products.create({
          name: product[i].name,
        });

        const price = await stripe.prices.create({
          product: productName.id,
          unit_amount: product[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    //tested works
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addOrder: async (parent, { product }, context) => {
      if (context.user) {
        const order = new Order({ product });
        //order save
        order.save();
        console.log("My new order:", order);

        console.log("My context id", context.user._id);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { orders: order },
          }
        );

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    // addOrder: async (parent, { product, project }, context) => {
    //   if (context.user) {
    //     const order = new Order({ product, project });
    //     console.log(order);

    //     await User.findOneAndUpdate(context.user._id, {
    //       $push: { orders: order._id },
    //     });

    //     return order;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    //tested works
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    //tested works
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
