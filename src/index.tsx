import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
   <App />
  </ApolloProvider>,

  document.getElementById("root")
);

serviceWorker.register();
