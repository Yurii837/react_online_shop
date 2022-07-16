import { DocumentNode, gql } from '@apollo/client';

export const GET_All_PRODUCTS: DocumentNode = gql`
  query categories {
    category {
      products {
        name,
        id,
        category,
        isInCart @client,
      }
    }
  }`

// export const typeDefs = gql`
//   extend type Query {
//     currentCurrency: String!
//     firstName: String!
//   }
// `;