load('newgraph.js');

g = new Graph(6);
g.addEdge(6,4);
g.addEdge(4,7);
g.addEdge(4,3);
g.addEdge(4,2);
g.addEdge(7,8);
g.addEdge(7,5);
g.addEdge(3,1);
g.addEdge(3,0);
g.addEdge(1,2);

g.showGraph();
print();
//g.topSort();
