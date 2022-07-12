import { gql } from '@apollo/client';

export const GET_All_PRODUCTS = gql`
  query categories {
    category {
      products {
        name,
        id,
        category
      }
    }
  }`
