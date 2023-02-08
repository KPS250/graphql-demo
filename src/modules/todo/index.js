import { todoData } from "../../data/index.js";
import {
  convertCursorToNodeId,
  convertNodeIdToCursor,
} from "../../utils/index.js";

let todos = [...todoData];

export const getAllToDos = ({ limit, cursor }) => {
  const totalItems = todos.length;
  let nodes = [];
  let start = 0;

  if (cursor !== "0") {
    start = convertCursorToNodeId(cursor);
  }
  let end = start + limit > totalItems ? totalItems : start + limit;

  for (const item of todos.slice(start, end)) {
    nodes.push({
      node: item,
      cursor: convertNodeIdToCursor(item),
    });
  }

  return {
    totalCount: totalItems,
    edges: nodes,
    pageInfo: {
      endCursor: totalItems > 0 ? nodes[nodes.length - 1].cursor : "",
      hasNextPage: end != totalItems,
    },
  };
};

export const createToDo = ({ name }) => {
  let node = {};
  node.id = todos.length + 1;
  node.name = name;
  node.timestamp = Date.now();
  todos.push(node);

  let newNode = { node: node, cursor: convertNodeIdToCursor(node) };
  return newNode;
};

export const updateToDo = ({ id, name }) => {
  let nodes = [...todos];
  let newNode = null;
  for (let node of nodes) {
    if (node.id === id) {
      node.name = name;
      newNode = node;
      break;
    }
  }
  todos = nodes;
  return newNode;
};

export const deleteToDo = ({ id }) => {
  todos = todos.filter((item) => item.id !== id);
  return { id: id };
};
