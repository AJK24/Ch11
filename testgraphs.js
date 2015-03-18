load('newgraph.js');



g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);



var houses = ['foundation', 'walls', 'roof', 'drywall', 'furnature', 'decorations','plumbing', 'eletrical',  'family'];

g.showGraph();
print();
g.topSort();
