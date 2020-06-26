import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
     <App />
  </ApolloProvider>,

  document.getElementById("root")
);

serviceWorker.register();
