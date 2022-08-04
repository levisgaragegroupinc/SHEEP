import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
mutation addOrder(
  $price: Float!){
    addOrder(
      price: $price
    )
  }
)`;

export const ADD_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      user {
        firstName
        lastName
        _id
      }
      token
    }
  }
`;

// export const UPDATE_USER = gql `
// mutation updateUser(

// )`

export const ADD_PRODUCT = gql`
  mutation Mutation($name: String, $price: Float) {
    addProduct(name: $name, price: $price) {
      _id
      name
      price
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation Mutation($name: String) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation Mutation(
    $name: String
    $description: String
    $category: ID
    $products: [ID!]
  ) {
    addProject(
      name: $name
      description: $description
      category: $category
      products: $products
    ) {
      _id
      name
      description
      products {
        name
        price
      }
      category {
        name
      }
    }
  }
`;
