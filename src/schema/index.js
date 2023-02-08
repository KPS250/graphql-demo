import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Query {
 allToDo(limit: Int, cursor: String): Page
}
type Mutation {
  createToDo(name: String): Node
  deleteToDo(id: Int): ToDo
  updateToDo(id: Int, name: String): ToDo
}
type ToDo {
  id: Int,
  name: String,
  timestamp: Float
}
type Node {
  node: ToDo,
  cursor: String
}
type Page {
  totalCount: Int,
  edges: [Node],
  pageInfo: PageInfo
}
type PageInfo {
  endCursor: String,
  hasNextPage: Boolean
}
`);
