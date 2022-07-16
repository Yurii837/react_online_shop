import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ApolloClient, ApolloProvider} from '@apollo/client';
import { cache } from './cache';



const client = new ApolloClient ({
  uri: 'http://localhost:4000/graphql',
  cache,
  connectToDevTools: true,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>   
  </React.StrictMode>
);

