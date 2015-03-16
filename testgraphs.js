load('Graphs.js');

g = new Graph(9);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(2,3);
g.addEdge(3,5);
g.addEdge(5,7);
g.addEdge(7,6);
g.addEdge(6,4);
g.addEdge(4,8);

var houses = ['foundation', 'walls', 'roof', 'drywall', 'furnature', 'decorations','plumbing', 'eletrical',  'family'];

g.showGraph();
print();
g.topSort();
