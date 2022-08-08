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


export const GET_CATEGORY_PRODUCTS: DocumentNode = gql`
  query category($selectedCategory: String!) {
    category (
      input: {
        title: $selectedCategory
      }
    ) {
      products {
      id
			name
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}`;

export const GET_CART_PRODUCTS: DocumentNode = gql`
  query getCartProducts {
    cartProducts @client
  }`;
