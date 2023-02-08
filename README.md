
# Graphql Demo




## Queries

```javascript
query getAllToDo($limit: Int, $cursor: String) {
  allToDo(limit: $limit, cursor: $cursor)  {
    totalCount
    edges{
     node{
      id
      name
      timestamp
    }
      cursor
    }
    pageInfo{
      endCursor
      hasNextPage
    }
  }
}

mutation addToDo($name: String) {
  createToDo(name: $name) {
    node{
      id
      name
      timestamp
    }
    cursor
  }
}

mutation updateToDo($id: Int, $name: String) {
  updateToDo(id: $id, name: $name) {
    id
    name
    timestamp
  }
}

mutation deleteToDo($id: Int) {
  deleteToDo(id: $id){
    id
  }
}
```

