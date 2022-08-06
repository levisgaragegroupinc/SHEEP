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
    products: [Product]
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
    categories(project: [ID], name: String): [Category]
    category(_id: ID!, project: [ID]): [Category]
    user(_id: ID!): User
    users: [User]
    orders: Order
    order(_id: ID!): Order
    products: Product
    product(_id: ID!): Product
    projects(product: ID): [Project]
    project(_id: ID!, product: ID): Project
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: ID!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    addProduct(name: String, price: Float): Product
    addProject(
      name: String
      description: String
      image: String
      products: [ID]
      category: ID
    ): Project
    addCategory(name: String, projects: [ID]): Category
  }
`;

module.exports = typeDefs;
