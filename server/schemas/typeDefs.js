const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    projects: [Project]
  }

  type Project {
    _id: ID
    name: String
    description: String
    image: String
    product: [Product]
    category: Category
  }

  type Product {
    _id: ID
    name: String
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    product: Product
    project: Project
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    dollarsDonated: Float
    projectsFunded: [Project]
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
    projects: [Project]
    categories: [Category]
    category(_id: ID!): Category
    project(_id: ID!): Project
    product(_id: ID!): Product
    users: [User]
    user(_id: ID!): User
    checkout(product: [ID]!): Checkout
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(product: ID!, project: ID!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
