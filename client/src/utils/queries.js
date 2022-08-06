import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query Query {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        project {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjects($category: ID) {
    projects(category: $category) {
      _id
      name
      description
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
  query Query {
    projects {
      _id
      name
      description
      image
      products {
        _id
        name
        price
      }
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      name
      description
      image
      products {
        _id
        name
        price
      }
      category {
        name
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    product {
      _id
      name
      price
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query getSingleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      price
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query Query {
    categories {
      _id
      name
      projects {
        _id
        name
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
