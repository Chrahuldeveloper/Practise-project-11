const SignUp = require("../resolvers/SignUp");

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },

  Mutation: {
    SignUp: SignUp,
  },
};

module.exports = resolvers;
