/*
On the back end side, our first goal is to create a GraphQL server that can:
  1) Receive an incoming GraphQL query from our client
  2) Validate that query against our newly created schema
  3) Populate the queried schema fields with mocked data
  4) Return the populated fields as a response
*/

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

/*
To start the server, we'll call the async listen method.
When it resolves, it logs a message to let us know our server is running
*/

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
