import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  {
    user {
      firstName
      lastName
      dollarsDonated
      projectsFunded
      orders {
        _id
        purchaseDate
        products {
          price
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
  {
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
  {
    categories {
      _id
      name
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
