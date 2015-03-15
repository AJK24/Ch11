load('Graphs.js');

g = new Graph(8);
g.addEdge(6,4);
g.addEdge(4,7);
g.addEdge(4,3);
g.addEdge(4,2);
g.addEdge(7,2);
g.addEdge(7,6);
g.addEdge(6,5);


g.showGraph();
print();
g.topSort();
