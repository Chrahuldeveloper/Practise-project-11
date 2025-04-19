const typeDefs = `#graphql
    type Query {
    hello : String,
    }
    type Mutation {
    SignUp(name: String!, email: String!, password: String!) : String!,
    SignIn(email: String!, password: String!) : String!,
    LinkShorten(url : String!):String!
    }
  `;

module.exports = typeDefs;
