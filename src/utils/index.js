export const convertNodeIdToCursor = (node) => {
  //console.log("convertNodeIdToCursor", node);
  return Buffer.from(node.id.toString()).toString("base64");
};

export const convertCursorToNodeId = (cursor) => {
  return parseInt(Buffer.from(cursor, "base64").toString("binary"));
};
