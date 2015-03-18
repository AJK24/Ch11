load('newgraph.js');



g = new Graph(10);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.addEdge(5,9);
g.addEdge(4,6);
g.addEdge(6,7);
g.addEdge(7,8);
g.addEdge(8,9);

//g.showGraph();

g.vertexList = ['foundation', 'walls', 'roof', 'drywall', 'furnature', 'decorations','plumbing', 'eletrical', 'utilities', 'family'];

g.showGraph();
print();
g.topSort();
