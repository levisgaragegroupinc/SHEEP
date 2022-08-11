import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
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
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation Mutation($product: [ID]!) {
    addOrder(product: $product) {
      _id
      purchaseDate
      product {
        _id
      }
    }
  }
`;

// export const ADD_ORDER = gql`
// mutation Mutation($product: ID!, $project: ID!) {
//   addOrder(product: $product, project: $project) {
//     _id
//     purchaseDate
//     product {
//       _id
//     }
//     project {
//       _id
//     }
//   }
// }`;

export const UPDATE_USER = gql`
  mutation Mutation(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
    }
  }
`;

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
