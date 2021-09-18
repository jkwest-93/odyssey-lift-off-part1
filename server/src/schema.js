const { gql } = require("apollo-server");

const typeDefs = gql`
  # Schema definitions go here
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    # Fields go here
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    # Fields go here
    id: ID!
    name: String!
    photo: String
  }

  """
  The fields of this type are entry points into the rest of our schema.
  These are the top level fields that our client can query for.
  """
  type Query {
    # Fields go here
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
