class Graph {

    constructor(node) {
        this.collection = [...node];
    }


    func() {
        let coll = this.collection;
        if (coll.length === 0) {
            return "there is no needed node";
        }
        let node = coll.shift();
        let isNeeded = node.isNeeded;
        if (!isNeeded) {
            node.inheritors.forEach(function (item) {
                coll.push(item);
            });
            return this.func();
        } else {
            return `we need node with name "${node.name}"`;
        }

    }
}

const nodeItem = [
    {
        name: 'bob',
        inheritors: [
            {
                name: 'david',
                inheritors: [],
                isNeeded: false,
            },
            {
                name: 'paggy',
                inheritors: [],
                isNeeded: false,
            },
        ],
        isNeeded: false,
    },
    {
        name: 'clare',
        inheritors: [
            {
                name: 'tom',
                inheritors: [],
                isNeeded: true,
            },
            {
                name: 'jony',
                inheritors: [],
                isNeeded: false,
            },
        ],
        isNeeded: false
    },
    {
        name: 'alice',
        inheritors: [
            {
                name: 'paggy',
                inheritors: [],
                isNeeded: false,
            },
        ],
        isNeeded: false,
    }
];

let graph = new Graph(nodeItem);
console.log(graph.func());