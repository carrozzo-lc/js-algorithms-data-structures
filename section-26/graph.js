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
}