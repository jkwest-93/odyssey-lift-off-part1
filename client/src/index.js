import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/**
ApolloClient is the class that represents the Apollo Client itself
  @param uri specifies the location of our GraphQL server.
  @param cache every instance of ApolloClient uses in-memory cache; this enables it to store and reuse query results so ti doesn't have to make as many network requests (aka faster/more efficient)
*/
const client = new ApolloClient({
  // options go here
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
