const { SignUp, SignIn } = require("../resolvers/SignUp");

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },

  Mutation: {
    SignUp: SignUp,
    SignIn: SignIn,
  },
};

module.exports = resolvers;
