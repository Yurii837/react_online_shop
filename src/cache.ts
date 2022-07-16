import { makeVar, InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      fields: {
        isInCart: {
          read () {
            return isInCartVar()
          }
        }
      }
    }
  }
})

export const isInCartVar = makeVar<boolean>(false);