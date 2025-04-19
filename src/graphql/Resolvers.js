const LinkShorten = require("../resolvers/LinkShorten");
const { SignUp, SignIn } = require("../resolvers/SignUp");

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },

  Mutation: {
    SignUp: SignUp,
    SignIn: SignIn,
    LinkShorten: LinkShorten,
  },
};

module.exports = resolvers;
