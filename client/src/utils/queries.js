import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  query Query {
    categories {
      _id
      name
      projects {
        _id
        name
        description
        image
      }
    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query Query($id: ID!) {
    category(_id: $id) {
      _id
      name
      projects {
        _id
        name
        description
        image
      }
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query Query($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      image
      product {
        _id
        name
        price
      }
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query Query($id: ID!) {
    product(_id: $id) {
      _id
      name
      price
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query Query {
    users {
      _id
      firstName
      lastName
      email
      dollarsDonated
      projectsFunded {
        _id
      }
      orders {
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query Query($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
      dollarsDonated
      projectsFunded {
        _id
        name
        description
        image
      }
      orders {
        _id
        purchaseDate
        project {
          _id
          name
          description
          image
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($product: ID!) {
    checkout(product: $product) {
      session
    }
  }
`;
