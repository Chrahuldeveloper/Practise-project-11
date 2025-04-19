const { ApolloServer } = require("@apollo/server");
const resolvers = require("./src/graphql/Resolvers.js");
const typeDefs = require("./src/graphql/Typedefs.js");
const { startStandaloneServer } = require("@apollo/server/standalone");
const givgitignore = require("giv-gitignore");

async function StartServer() {
  try {
    givgitignore();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4001 },
    });
    console.log("db connected");
    console.log(`server started at ${url}`);
  } catch (error) {
    console.log(error);
  }
}

StartServer();
