import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import middleware from "./middleware";
import cors from "cors";

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use(cors());
  app.use(middleware);

  app.get("/", (req: any, res: any) => {
    res.send("Hello");
  });

  app.listen({ port: 4000 });
  console.log("🚀 Server ready at -", {
    REST: `http://localhost:4000`,
    Graphql: `http://localhost:4000${server.graphqlPath}`,
  });
  return { server, app };
}

startApolloServer();
