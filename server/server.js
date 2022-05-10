const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { getNonProfits } = require("./utils/API");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
// async function random() {
//   const { data } = await getNonProfits();
//   console.log(data);
// }
// random()
const PORT = process.env.PORT || 3001;
const app = express();
let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
