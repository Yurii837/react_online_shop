import { DocumentNode, gql } from '@apollo/client';

export const GET_CATEGORIES: DocumentNode = gql`
  query categories {
    categories {
      name
    }
  }`;

export const GET_CATEGORY_LOC: DocumentNode = gql`
query GetSelectedCategory {
  selectedCategory @client
}`;

export const GET_CURRENCIES: DocumentNode = gql`
query currencies {
  currencies {
    label,
    symbol
  }
}`;


export const GET_CURRENCY_LOC: DocumentNode = gql`
query GetCurrency {
  selectedCurrency @client
}`;

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
  }`;

// export const typeDefs = gql`
//   extend type Query {
//     currentCurrency: String!
//     firstName: String!
//   }
// `;