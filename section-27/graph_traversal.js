class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1]?.filter(
      (item) => item !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2]?.filter(
      (item) => item !== v1
    );
  }
  removeVertex(v) {
    for (const property in this.adjacencyList) {
      if (this.adjacencyList[property].includes(v)) {
        this.removeEdge(property, v);
      }
    }
    delete this.adjacencyList[v];
  }
  depthFirstRecursive(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    dfs(vertex);

    function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      for (let i = 0; i <= adjacencyList[vertex].length; i++) {
        if (!visited[adjacencyList[vertex][i]]) {
          dfs(adjacencyList[vertex][i]);
        }
      }
    }

    return result;
  } 
  depthFirstIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[vertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
  breadthFirstIterative(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};

    let currentVertex;

    visited[vertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }  
}