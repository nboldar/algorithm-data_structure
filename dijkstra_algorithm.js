let inf = Number.POSITIVE_INFINITY;
let costs = {
    "start": 0,
    "a": inf,
    "b": inf,
    "d": inf,
    'e': inf,
    'final': inf,
};


class Node {
    get _name() {
        return this.name;
    }

    constructor(name) {
        this.inheritors = [];
        this.name = name;
    }
}

let start = new Node('start');
let a = new Node('a');
let b = new Node('b');
let d = new Node('d');
let e = new Node('e');
let final = new Node('final');

start.inheritors.push({node: a, value: 5}, {node: d, value: 2});
a.inheritors.push({node: b, value: 4}, {node: e, value: 2});
d.inheritors.push({node: a, value: 1}, {node: e, value: 4});
b.inheritors.push({node: final, value: 3}, {node: e, value: 6});
e.inheritors.push({node: final, value: 1});
let processed = [
    {
        node: start,
        processed: false
    },
    {
        node: a,
        processed: false
    },
    {
        node: d,
        processed: false
    },
    {
        node: b,
        processed: false
    },
    {
        node: e,
        processed: false
    },
    {
        node: final,
        processed: false
    },
];
let parents = {
    'start': null,
    'a': null,
    'b': null,
    'd': null,
    'e': null,
    'final': null,
};


function dextra(node) {

    node.inheritors.forEach((item, i) => {
        if (parents[`${item.node.name}`] === null|| parents[`${item.node.name}`].name === 'start') {
            parents[`${item.node.name}`] = node;
            if ((item.value + costs[`${node.name}`]) < costs[`${item.node.name}`]) {
                costs[`${item.node.name}`] = item.value + costs[`${node.name}`];

            }
        } else {
            let parent = parents[`${item.node.name}`].name;
            if ((item.value + costs[`${node.name}`]) < costs[`${item.node.name}`]) {
                costs[`${item.node.name}`] = item.value + costs[`${node.name}`];
                parents[`${item.node.name}`] = node;
            }
        }
    });
    console.log(costs);
    console.log(parents);
}

processed.forEach((item) => {
    dextra(item.node);
    item.processed = true;
});
console.log(costs);
