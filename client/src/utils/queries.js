import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_ALL_FUNDS = gql`
  {
    funds {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;

export const QUERY_SINGLE_FUND = gql``;

export const QUERY_DONATION = gql``;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
