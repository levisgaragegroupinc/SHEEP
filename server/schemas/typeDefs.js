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
    category: Category
  }

type product {
_id: ID
price: Int
}

  type Order {
    _id: ID
    purchaseDate: String
    product: [Products]
  }

  type FundHistory {
    projectId: String!
    projectTitle: String!
    projectDescription: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    fundedCount: Int
    funded: [FundHistory]
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
    me: User
    categories: [Category]
    projects()
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
