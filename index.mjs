import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
  getAllToDos,
  createToDo,
  deleteToDo,
  updateToDo,
} from "./src/modules/todo/index.js";
import { schema } from "./src/schema/index.js";

var app = express();
const port = 4000;

// The root provides a resolver function for each API endpoint
var root = {
  allToDo: getAllToDos,
  createToDo: createToDo,
  deleteToDo: deleteToDo,
  updateToDo: updateToDo,
};

//app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
