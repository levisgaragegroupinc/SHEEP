const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Project {
    _id: ID
    name: String
    description: String
    image: String
    products: [Product]
  }

  type Product {
    _id: ID
    name: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Products]
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    fundedCount: Int
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    categories: [Category]
    user: User
    orders: Order
    order(_id: ID!): Order
    products: Product
    product(_id: ID!): Product
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID!]): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, name: String, price: Float, category: ID): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
