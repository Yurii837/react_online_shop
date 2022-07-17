import { makeVar, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      fields: {
        isInCart: {
          read () {
            return isInCartVar()
          }
        },
      }
    },
    Query: {
      fields: {
        selectedCategory: {
          read () {
            return selectedCategoryVar()
          }
        },
        selectedCurrency: {
          read () {
            return selectedCurrencyVar()
          }
        }
      }
    }
  }
})


export const isInCartVar = makeVar<boolean>(false);
export const selectedCategoryVar = makeVar<string>('all');
export const selectedCurrencyVar = makeVar<string>('$');